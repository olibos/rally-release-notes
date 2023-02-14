import {
  derived,
  readable,
  type Subscriber,
} from 'svelte/store';

let storyUrl: string;
let setStoryUrl: Subscriber<string>;
export const lastStoryUrl = readable(
    storyUrl,
    (setter) => 
    {
        setStoryUrl = setter;
        setter(storyUrl);
    });

let storyCount: number;
let setStoryCount: Subscriber<number>;
export const lastStoryCount = readable(
    storyCount,
    (setter) => 
    {
        setStoryCount = setter;
        setter(storyCount);
    });

export const hasStoryUrl = derived(lastStoryUrl, (value) => !!value);

function intercept<TType, TMethod extends keyof TType, TFunction extends TType[TMethod] & Function>(target: TType, method: TMethod, callback: TFunction)
{
    const original = target[method] as Function;
    target[method] = function ()
    {
        callback.apply(this, arguments);
        return original.apply(this, arguments);
    } as any;
}

intercept(XMLHttpRequest.prototype, 'open', function (this: XMLHttpRequest, method: string, uri: string)
{
    if (method !== 'GET') return;
    const url = new URL(uri, location.toString());
    if (!url.pathname.startsWith('/slm/webservice/v2.x/artifact') ||
        !url.searchParams.get('query') ||
        (url.searchParams.get('query').includes('Iteration.EndDate') && url.searchParams.get('query').includes('Iteration.StartDate')))
    {
        return;
    }

    const getStats = () =>
    {
        try
        {
            const json = JSON.parse(this.responseText);
            if (typeof (json?.QueryResult?.TotalResultCount) !== 'number') return;
            storyUrl = url.toString();
            setStoryUrl?.(storyUrl);
            storyCount = json.QueryResult.TotalResultCount;
            setStoryCount?.(storyCount);
        } catch (ignore) { }
    }

    this.addEventListener('load', getStats, { once: true });
});