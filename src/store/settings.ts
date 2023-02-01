import { writable } from 'svelte/store';
import { parse } from 'yaml';

export interface Category {
	title: string;
	labels: string[];
	label?: string;
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

export function setSettings(yaml: string)
{
  settings = parse(yaml);
  localStorage.setItem(SETTINGS_KEY, yaml);
}

const LAST_RELEASE_DATE_KEY = 'rn-last-release-date';
export const lastReleaseDate = writable(new Date(localStorage.getItem(LAST_RELEASE_DATE_KEY) || Date.now()));
lastReleaseDate.subscribe(date => date ? localStorage.setItem(LAST_RELEASE_DATE_KEY, date.toDateString()) : localStorage.removeItem(LAST_RELEASE_DATE_KEY));