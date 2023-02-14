<script lang="ts" context="module">
  import type { TagsNameArray } from "@/data/models";

  function hasLabel(tags: Iterable<TagsNameArray>, list: Iterable<string>) {
    for (const { Name: tag } of tags) {
      for (const tag2 of list) {
        if (
          tag &&
          tag.localeCompare(tag2, "fr", { sensitivity: "base" }) === 0
        ) {
          return true;
        }
      }
    }

    return false;
  }
</script>

<script lang="ts">
  import { major, minor, patch } from "@/store/version";
  import {
    url,
    getSettingsSource,
    lastReleaseDate,
    setSettings,
  } from "@/store/settings";
  import { marked } from "marked";
  import mustache from "mustache";
  import { getReleaseNotes } from "@/data/rally";
  import InputDate from "@/components/forms/InputDate.svelte";
  import { hasStoryUrl, lastStoryUrl } from "@/store/webservice";

  let dialog: HTMLDialogElement;
  let saved: HTMLDialogElement;
  let showAdvanced = false;
  let yaml: string;

  export function show() {
    return new Promise<boolean>((ok) => {
      yaml = getSettingsSource();
      fromDate = $lastReleaseDate;
      dialog.returnValue = "";
      dialog.showModal();
      dialog.addEventListener(
        "close",
        async () => {
          if (dialog.returnValue !== "save") {
            return ok(false);
          }

          let releaseNotes = await getReleaseNotes($url, fromDate, toDate);
          let changes = "";
          let hasMajor = false;
          let hasMinor = false;
          let hasPatch = false;
          const settings = setSettings(yaml);
          for (const category of settings.categories) {
            if (!category.labels && category.label) {
              category.labels = [category.label];
            }

            if (!category.labels?.length) {
              continue;
            }

            const notes = releaseNotes.filter(({ Tags }) => {
              if (
                !hasMajor &&
                hasLabel(
                  Tags._tagsNameArray,
                  settings["version-resolver"]?.major?.labels
                )
              ) {
                hasMajor = true;
              }

              if (
                !hasMajor &&
                !hasMinor &&
                hasLabel(
                  Tags._tagsNameArray,
                  settings["version-resolver"]?.minor?.labels
                )
              ) {
                hasMinor = true;
              }

              if (
                !hasMajor &&
                !hasMinor &&
                !hasPatch &&
                hasLabel(
                  Tags._tagsNameArray,
                  settings["version-resolver"]?.patch?.labels
                )
              ) {
                hasPatch = true;
              }

              for (const label of category.labels) {
                if (
                  Tags._tagsNameArray.find(
                    ({ Name }) =>
                      Name.localeCompare(label, "fr", {
                        sensitivity: "base",
                      }) === 0
                  )
                ) {
                  return true;
                }
              }

              return false;
            });

            if (!notes.length) {
              continue;
            }

            changes += `## ${category.title}
${notes
  .map((story) => mustache.render(settings["change-template"], story))
  .join("\n")}
`;
          }

          let newMajor = $major;
          let newMinor = $minor;
          let newPatch = $patch;
          if (hasMajor) {
            newMajor++;
            newMinor = newPatch = 0;
          } else if (hasMinor) {
            newMinor++;
            newPatch = 0;
          } else if (hasPatch) {
            newPatch++;
          }

          const notes = marked.parse(
            mustache.render(settings.template, {
              changes,
              version: `${newMajor}.${newMinor}.${newPatch}`,
            })
          );
          navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([notes], { type: "text/html" }),
              "text/plain": new Blob([notes], { type: "text/plain" }),
            }),
          ]);

          $major = newMajor;
          $minor = newMinor;
          $patch = newPatch;
          $lastReleaseDate = toDate;
          saved.showModal();
          ok(true);
        },
        { once: true }
      );
    });
  }

  function copyLastStoryFilter() {
    $url = $lastStoryUrl;
  }

  function toggleAdvanced() {
    showAdvanced = !showAdvanced;
  }

  let fromDate = $lastReleaseDate;
  let toDate = new Date();
</script>

<dialog bind:this={dialog}>
  <header>Settings</header>
  <form method="dialog">
    <div class="form-control">
      <label for="from">From: </label>
      <InputDate id="from" bind:value={fromDate} />
    </div>
    <div class="form-control">
      <label for="to">To: </label>
      <InputDate id="to" bind:value={toDate} />
    </div>
    <div class="form-control">
      <label for="major">Version: </label>
      <input
        name="major"
        id="major"
        type="number"
        size={2}
        max={999}
        min={0}
        bind:value={$major}
      />
      <input
        name="minor"
        id="minor"
        type="number"
        size={2}
        max={999}
        min={0}
        bind:value={$minor}
      />
      <input
        name="patch"
        id="patch"
        type="number"
        size={2}
        max={999}
        min={0}
        bind:value={$patch}
      />
    </div>
    <div class="advanced">
      <button
        type="button"
        class="toggle"
        class:collapsed={!showAdvanced}
        on:click={toggleAdvanced}>Advanced</button
      >
      {#if showAdvanced}
        <div class="form-control">
          <label for="url">
            WebService:
            <button
              type="button"
              on:click={copyLastStoryFilter}
              disabled={!$hasStoryUrl}
            >
              📋
            </button>
          </label>
          <input type="text" id="url" bind:value={$url} />
        </div>
        <div class="form-control">
          <label for="template">Template: </label>
          <textarea id="template" bind:value={yaml} rows={10} />
        </div>
      {/if}
    </div>
    <footer>
      <button value="save">Save</button>
      <button value="cancel">Cancel</button>
    </footer>
  </form>
</dialog>

<dialog bind:this={saved}>
  <form method="dialog">
    <header>Saved!</header>
    <div>Your releases notes are saved in your clipboard.</div>
    <footer>
      <button value="OK">OK</button>
    </footer>
  </form>
</dialog>

<style>
  dialog {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 30px;
    text-align: left;
    font-size: 16.3px;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  header {
    font-size: 1.5em;
    margin-top: 0;
  }

  .form-control {
    position: relative;
    margin: 5px 0;
  }
  input,
  textarea {
    padding: 5px;
    border: solid 1px #ccc;
    border-radius: 5px;
  }
  input:focus,
  textarea:focus {
    outline-color: #007bff;
  }
  .form-control label {
    display: inline-block;
    width: 20%;
  }

  .advanced {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin: 10px 0;
  }
  .advanced label {
    display: block;
    width: auto;
  }
  .advanced .form-control {
    margin: 10px;
  }
  .advanced textarea,
  .advanced input[type="text"] {
    width: 98%;
    margin: 0 auto;
  }

  .advanced textarea {
    resize: vertical;
  }
  .advanced button.toggle {
    border-radius: calc(0.25rem - 1px);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      border-radius 0.15s ease;
  }
  .advanced button.toggle:after {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform 0.2s ease-in-out;
  }

  .advanced button.toggle:not(.collapsed) {
    color: #0c63e4;
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
  }

  .advanced button.toggle:not(.collapsed):after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transform: rotate(-180deg);
  }

  .advanced button:focus:not(:focus-visible) {
    outline: 0;
  }

  footer button {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    float: right;
    font-size: 0.8em;
    padding: 10px 15px;
    margin-left: 10px;
  }
  button[value="cancel"] {
    background-color: #6c757d;
  }
</style>
