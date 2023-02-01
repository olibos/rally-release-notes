import Settings from './components/dialogs/Settings.svelte';

const settings = window["rn-popup"] = new Settings({target:document.body});
if(!location.host.includes(':'))
{
    // production
    settings.show();
}