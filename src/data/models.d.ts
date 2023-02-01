export interface Story
{
    _ref: string
    _refObjectUUID: string
    _refObjectName: string
    _p: string
    DisplayColor: string
    FormattedID: string
    Name: string
    Owner: Owner
    Project: Project
    Tags: Tags
    Attachments: Attachments
    Children: Children
    Defects: Defects
    DirectChildrenCount: number
    DragAndDropRank: string
    Parent: any
    Tasks: Tasks
    TestCases: TestCases
    PortfolioItem: PortfolioItem
    c_Requestor: string
    c_Owner: string
    c_StoryLink: string;
    _type: string
}

export interface Owner
{
    _ref: string
    _refObjectUUID: string
    _refObjectName: string
    _p: string
    _type: string
}

export interface Project
{
    _ref: string
    _refObjectUUID: string
    _refObjectName: string
    _p: string
    Children: Children
    Name: string
    Owner: Owner
    Parent: Parent
    _type: string
}

export interface Children
{
    _ref: string
    _type: string
    Count: number
}

export interface Parent
{
    _ref: string
    _refObjectUUID: string
    _refObjectName: string
    _p: string
    Name: string
    Owner: Owner
    _type: string
}

export interface Tags
{
    _ref: string
    _type: string
    _tagsNameArray: TagsNameArray[]
    Count: number
}

export interface TagsNameArray
{
    Name: string
    _ref: string
}

export interface Attachments
{
    _ref: string
    _type: string
    Count: number
}

export interface Defects
{
    _ref: string
    _type: string
    Count: number
}

export interface Tasks
{
    _ref: string
    _type: string
    Count: number
}

export interface TestCases
{
    _ref: string
    _type: string
    Count: number
}

export interface PortfolioItem
{
    _ref: string
    _refObjectUUID: string
    _refObjectName: string
    _p: string
    DisplayColor: string
    FormattedID: string
    Name: string
    Owner: Owner
    Project: Project
    Tags: Tags
    Attachments: Attachments
    DirectChildrenCount: number
    DragAndDropRank: string
    Parent: Parent
    _type: string
}
