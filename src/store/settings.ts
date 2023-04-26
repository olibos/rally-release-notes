import { writable } from 'svelte/store';
import { parse } from 'yaml';

export interface Category {
	title: string;
	labels: string[];
	label?: string;
  exclude?: string;
  excludes?: string[];
}

export interface Major {
	labels: string[];
}

export interface Minor {
	labels: string[];
}

export interface Patch {
	labels: string[];
}

export interface VersionResolver {
	major: Major;
	minor: Minor;
	patch: Patch;
	default: string;
}

export interface Settings {
	"name-template": string;
	"categories": Category[];
	"change-template": string;
	"version-resolver": VersionResolver;
	template: string;
}

const DEFAULT_SETTINGS = `name-template: 'v$RESOLVED_VERSION 🌈'
categories:
  - title: '💥 Breaking Changes' 
    labels:
      - 'breaking'
  - title: '✨ New Features'
    labels:
      - 'new-feature'
  - title: '👍 Improved Features'
    labels:
      - 'feature'
      - 'enhancement'
      - 'Demand management'
  - title: '🐛 Bug Fixes'
    labels:
      - 'fix'
      - 'bugfix'
      - 'bug'
  - title: '🧪 Testing'
    label: 'test'
  - title: '⚒️ Continous Integration'
    label: 'ci'
  - title: '💻 Hosting'
    label: 'hosting'
  - title: '🧰 Maintenance'
    labels:
      - 'chore'
      - 'documentation'
      - 'dependencies'
      - 'maintenance'
  - title: '🆕 Other Changes'
    excludes:
      - 'breaking'
      - 'major'
      - 'new-feature'
      - 'feature'
      - 'enhancement'
      - 'fix'
      - 'bugfix'
      - 'bug'
      - 'test'
      - 'ci'
      - 'hosting'
      - 'chore'
      - 'documentation'
      - 'dependencies'
      - 'maintenance'
change-template: |
  - {{Name}} ([{{FormattedID}}]({{{c_StoryLink}}}))
    {{#c_Owner}}-  **Owner**: *{{c_Owner}}*{{/c_Owner}}
    {{#c_Requestor}}-  **Requestor**: *{{c_Requestor}}*{{/c_Requestor}}
version-resolver:
  major:
    labels:
      - 'major'
      - 'breaking'
  minor:
    labels:
      - 'minor'
      - 'new-feature'
      - 'feature'
      - 'enhancement'
      - 'chore'
      - 'documentation'
      - 'dependencies'
      - 'test'
      - 'hosting'
      - 'ci'
  patch:
    labels:
      - 'fix'
      - 'bugfix'
      - 'bug'
      - 'patch'
template: |
  Version: {{version}}
  ====================
  # What's Changed

  {{{changes}}}
`;

const SETTINGS_KEY = 'rn-template';
let storage = localStorage.getItem(SETTINGS_KEY);
if (!storage)
{
    localStorage.setItem(SETTINGS_KEY, storage = DEFAULT_SETTINGS);
}

let settings: Settings = parse(storage);
export function getSettings(): Settings
{
  return settings;
}

export function getSettingsSource(): string
{
  return storage;
}

export function setSettings(yaml: string)
{
  settings = parse(yaml);
  localStorage.setItem(SETTINGS_KEY, storage = yaml);
  return settings;
}

const LAST_RELEASE_DATE_KEY = 'rn-last-release-date';
export const lastReleaseDate = writable(new Date(localStorage.getItem(LAST_RELEASE_DATE_KEY) || Date.now()));
lastReleaseDate.subscribe(date => date ? localStorage.setItem(LAST_RELEASE_DATE_KEY, date.toDateString()) : localStorage.removeItem(LAST_RELEASE_DATE_KEY));

const URL_KEY = 'rn-url';
export const url = writable(localStorage.getItem(URL_KEY) || `https://${location.host}/slm/webservice/v2.x/artifact?compact=true&includePermissions=true&key=BW7SwZMRpGV6JDP57shu8sxn37aEUAgpx4FVnAlDnw&fetch=TestFolder%2CDisplayColor%2CDefects%2CTestCase%2CRequirement%2CDirectChildrenCount%2CParent%2CName%2CTaskIndex%2CTasks%2CTestSet%2CAttachments%2CTestCases%2COwner%2Cc_Requestor%2CFormattedID%2CTags%2CProject%2CPortfolioItem%2CWorkProduct%2CDragAndDropRank%2CChildren%2Csum%3A%5B%5D&query=%28Tags+contains+%22%2Ftag%2F67131756153%22%29&start=1&pagesize=100&order=DragAndDropRank+ASC&showHiddenFieldsForVersionedAlias=true&types=HierarchicalRequirement&project=%2Fproject%2F5b7406d8-5b26-4c2c-958b-6916033f6426&projectScopeUp=false&projectScopeDown=true`);
url.subscribe(url => url ? localStorage.setItem(URL_KEY, url) : localStorage.removeItem(URL_KEY));
