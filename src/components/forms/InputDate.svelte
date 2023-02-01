<script lang="ts">
  export let value: Date;
  export let id: string = undefined;

  let control: HTMLInputElement;
  function handleChange() {
    value = control.valueAsDate;
  }

  $: control && (control.valueAsDate = value);
</script>

<input type="date" bind:this={control} on:input={handleChange} {id} />
