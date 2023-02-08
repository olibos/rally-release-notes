import type { Story } from './models';

const host = window.location.host;
export async function getReleaseNotes(webservice: string, from:Date = null, to: Date = null)
{
    try
    {
        const url = filter(webservice, from, to);
        const response = await fetch(url);
        const json = await response.json();
        return fixOwner(json.QueryResult.Results);
    }
    catch (dev)
    {
        // TODO: Cleanup
        const data = [
            {
                "_ref": "/hierarchicalrequirement/72878581781",
                "_refObjectUUID": "4d7ce260-24a2-4fc3-ae92-d72b5b1c8d47",
                "_refObjectName": "NCO - Cleanup entities",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US577517",
                "Name": "NCO - Cleanup entities",
                "Owner": {
                    "_ref": "/user/66372341721",
                    "_refObjectUUID": "b7c42eb9-7e75-4eb7-8cf9-119323051d6c",
                    "_refObjectName": "Olivier BOSSAER",
                    "_p": "2",
                    "_type": "User"
                },
                "Project": {
                    "_ref": "/project/66811577677",
                    "_refObjectUUID": "5b7406d8-5b26-4c2c-958b-6916033f6426",
                    "_refObjectName": "FUN_SQ Housing",
                    "_p": "0",
                    "Children": {
                        "_ref": "/Project/66811577677/Children",
                        "_type": "Project",
                        "Count": 0
                    },
                    "Name": "FUN_SQ Housing",
                    "Owner": {
                        "_ref": "/user/65098320593",
                        "_refObjectUUID": "365307fe-7e7c-4955-821e-fa4a60d38ec2",
                        "_refObjectName": "tcq@bnpparibasfortis.com",
                        "_p": "0",
                        "_type": "User"
                    },
                    "Parent": {
                        "_ref": "/project/65094372557",
                        "_refObjectUUID": "b76a293a-6965-4963-9500-799f2e7db87b",
                        "_refObjectName": "Tribe Functions",
                        "_p": "0",
                        "Name": "Tribe Functions",
                        "Owner": {
                            "_ref": "/user/65098320593"
                        },
                        "_type": "Project"
                    },
                    "_type": "Project"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72878581781/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "Maintenance",
                            "_ref": "/tag/65203801341"
                        }
                    ],
                    "Count": 2
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72878581781/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72878581781/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72878581781/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "O~wj@FoB=/nI;GzqADbn;.]h{D6%Lj'3;.`{a>qVz2Nc:%>0NW|X1zA}P<|k{zLG",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72878581781/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72878581781/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72876955833",
                    "_refObjectUUID": "eaaa5017-1dd4-46d0-bf10-b372a5dbc801",
                    "_refObjectName": "NCO - BT - DM : After care for IMSYS",
                    "_p": "7",
                    "DisplayColor": "#4a1d7e",
                    "FormattedID": "F54443",
                    "Name": "NCO - BT - DM : After care for IMSYS",
                    "Owner": {
                        "_ref": "/user/66372525105",
                        "_refObjectUUID": "5e8b334c-cdcf-4674-899d-1ad9b7577100",
                        "_refObjectName": "Kevin HUART",
                        "_p": "0",
                        "_type": "User"
                    },
                    "Project": {
                        "_ref": "/project/66811577677"
                    },
                    "Tags": {
                        "_ref": "/PortfolioItem/Feature/72876955833/Tags",
                        "_type": "Tag",
                        "_tagsNameArray": [
                            {
                                "Name": "@NCO_DRH",
                                "_ref": "/tag/72501288713"
                            }
                        ],
                        "Count": 0
                    },
                    "Attachments": {
                        "_ref": "/PortfolioItem/Feature/72876955833/Attachments",
                        "_type": "Attachment",
                        "Count": 0
                    },
                    "DirectChildrenCount": 8,
                    "DragAndDropRank": "O~|5C;2Ya;4HqKvM?6U19G2|*AJzm/M%h2`Rl93uhkBpqv)udv~.^=iG8:;.9@\"6",
                    "Parent": {
                        "_ref": "/portfolioitem/opus/72162906349",
                        "_refObjectUUID": "2d478bd5-9cca-4148-9573-20a523cf17e5",
                        "_refObjectName": "SEA commissions",
                        "_p": "0",
                        "DisplayColor": "#848689",
                        "FormattedID": "OP3985",
                        "Name": "SEA commissions",
                        "Owner": {
                            "_ref": "/user/65170965549",
                            "_refObjectUUID": "66b392a8-4330-492d-b92d-975c3aedda47",
                            "_refObjectName": "Ken DIELTIENS",
                            "_p": "0",
                            "_type": "User"
                        },
                        "Project": {
                            "_ref": "/project/65097603065",
                            "_refObjectUUID": "69dd9bce-ce04-4a58-af1d-96f512916b75",
                            "_refObjectName": "Tribe CRM Individuals & MDM",
                            "_p": "0",
                            "Name": "Tribe CRM Individuals & MDM",
                            "Owner": {
                                "_ref": "/user/65098320593"
                            },
                            "_type": "Project"
                        },
                        "Tags": {
                            "_ref": "/PortfolioItem/Opus/72162906349/Tags",
                            "_type": "Tag",
                            "_tagsNameArray": [],
                            "Count": 0
                        },
                        "Attachments": {
                            "_ref": "/PortfolioItem/Opus/72162906349/Attachments",
                            "_type": "Attachment",
                            "Count": 0
                        },
                        "DirectChildrenCount": 6,
                        "DragAndDropRank": "P!4TeS26h<&#,rXB+2FglT+`)&eHVch8rsTp2HN07HC[5SY/O))[UFaqj/=RfBb#",
                        "_type": "PortfolioItem/Opus"
                    },
                    "_type": "PortfolioItem/Feature"
                },
                "c_Requestor": "ANNICK HEYNDERICKX",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72647709149",
                "_refObjectUUID": "808c3fef-0fe7-4d00-93b4-4c41f734e2fe",
                "_refObjectName": "[Continued] Stop accès back office imsys",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US543957",
                "Name": "[Continued] Stop accès back office imsys",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72647709149/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Q-Spillover",
                            "_ref": "/tag/65313292829"
                        },
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "Spill-over previous Quarter",
                            "_ref": "/tag/66106748569"
                        }
                    ],
                    "Count": 3
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72647709149/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72647709149/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72647709149/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "O~wjAFoB=/nI;GzqADbn;.]h{D6%Lj'3;.`{a>qVz2Nc:%>0NW|X1zA}P=(eGf!v",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72647709149/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72647709149/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72726603777",
                    "_refObjectUUID": "fefa4f2d-0594-4cba-96c3-80d585cc276c",
                    "_refObjectName": "BT - DM - Request management small changes (IMSYS) Q1 - 2023",
                    "_p": "7",
                    "DisplayColor": "#848689",
                    "FormattedID": "F51764",
                    "Name": "BT - DM - Request management small changes (IMSYS) Q1 - 2023",
                    "Owner": {
                        "_ref": "/user/66372341721"
                    },
                    "Project": {
                        "_ref": "/project/66811577677"
                    },
                    "Tags": {
                        "_ref": "/PortfolioItem/Feature/72726603777/Tags",
                        "_type": "Tag",
                        "_tagsNameArray": [
                            {
                                "Name": "Demand management",
                                "_ref": "/tag/67131756153"
                            }
                        ],
                        "Count": 0
                    },
                    "Attachments": {
                        "_ref": "/PortfolioItem/Feature/72726603777/Attachments",
                        "_type": "Attachment",
                        "Count": 0
                    },
                    "DirectChildrenCount": 14,
                    "DragAndDropRank": "P!4g\"!y)n(Zv04@4GE0nQOZ[#[7PJ\\k]FB_O\\P`#zT5El+yTt-$Nc1rYab?6NYRe",
                    "Parent": {
                        "_ref": "/portfolioitem/opus/72907255033",
                        "_refObjectUUID": "71bed689-0e93-48af-a2ae-c9b7c4466f35",
                        "_refObjectName": "CL HSS - Small Enhancement 2023",
                        "_p": "0",
                        "DisplayColor": "#848689",
                        "FormattedID": "OP5619",
                        "Name": "CL HSS - Small Enhancement 2023",
                        "Owner": {
                            "_ref": "/user/65128621309",
                            "_refObjectUUID": "a054eba8-d224-4bdc-9165-07fe4e8cdb90",
                            "_refObjectName": "Cécile Fournier",
                            "_p": "0",
                            "_type": "User"
                        },
                        "Project": {
                            "_ref": "/project/66373364005",
                            "_refObjectUUID": "073b877a-e275-4995-8f0f-ba3b6c3358e1",
                            "_refObjectName": "FUN_CL HSS",
                            "_p": "0",
                            "Name": "FUN_CL HSS",
                            "Owner": {
                                "_ref": "/user/65098320593"
                            },
                            "_type": "Project"
                        },
                        "Tags": {
                            "_ref": "/PortfolioItem/Opus/72907255033/Tags",
                            "_type": "Tag",
                            "_tagsNameArray": [],
                            "Count": 0
                        },
                        "Attachments": {
                            "_ref": "/PortfolioItem/Opus/72907255033/Attachments",
                            "_type": "Attachment",
                            "Count": 0
                        },
                        "DirectChildrenCount": 10,
                        "DragAndDropRank": "P!#2Ny`H['I[k)Y+}bEiq*|L^(][(0bR~8Tqd`D-odBFLHh7snXX|U!+QFBf}RB.",
                        "_type": "PortfolioItem/Opus"
                    },
                    "_type": "PortfolioItem/Feature"
                },
                "c_Requestor": "annick heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72749523065",
                "_refObjectUUID": "fb930099-c43e-4069-9c5a-dbf0af1625ab",
                "_refObjectName": "Contenu rôle Strategic analysis + création droits+ domaine Strategic analysis",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US553020",
                "Name": "Contenu rôle Strategic analysis + création droits+ domaine Strategic analysis",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72749523065/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "SP not estimated",
                            "_ref": "/tag/72859044481"
                        }
                    ],
                    "Count": 2
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72749523065/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72749523065/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72749523065/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "O~wjBFoB=/nI;GzqADbn;.]h{D6%Lj'3;.`{a>qVz2Nc:%>0NW|X1zA}P=2[uTwW",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72749523065/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72749523065/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72726603777"
                },
                "c_Requestor": "ANNICK HEYNDERICKX",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72124905705",
                "_refObjectUUID": "4244827e-c214-4d0d-a6fa-1599bbc27a63",
                "_refObjectName": "IMSYS - Offices - Structure adaptation",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US480846",
                "Name": "IMSYS - Offices - Structure adaptation",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72124905705/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72124905705/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72124905705/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72124905705/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "O~yb'9W7W.#z{fHe4(opds^HVu:|D5GG)5:@~nftYG0]N<GK6b_{9G~9$H!X0eVi",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72124905705/Tasks",
                    "_type": "Task",
                    "Count": 1
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72124905705/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/66841616513",
                    "_refObjectUUID": "29a5bc66-b4a7-48c4-9946-b8bf605390ea",
                    "_refObjectName": "BT - DM - Request management for offices (IMSYS)",
                    "_p": "7",
                    "DisplayColor": "#848689",
                    "FormattedID": "F32922",
                    "Name": "BT - DM - Request management for offices (IMSYS)",
                    "Owner": {
                        "_ref": "/user/66372341721"
                    },
                    "Project": {
                        "_ref": "/project/66811577677"
                    },
                    "Tags": {
                        "_ref": "/PortfolioItem/Feature/66841616513/Tags",
                        "_type": "Tag",
                        "_tagsNameArray": [
                            {
                                "Name": "PERF_NO",
                                "_ref": "/tag/65868509185"
                            },
                            {
                                "Name": "Demand management",
                                "_ref": "/tag/67131756153"
                            },
                            {
                                "Name": "WAVA_NO",
                                "_ref": "/tag/65896669261"
                            }
                        ],
                        "Count": 0
                    },
                    "Attachments": {
                        "_ref": "/PortfolioItem/Feature/66841616513/Attachments",
                        "_type": "Attachment",
                        "Count": 0
                    },
                    "DirectChildrenCount": 12,
                    "DragAndDropRank": "P!0pMW,Sc=qg`#4.ISw&1To3P#t`IIudob'cz.:n]6@DaY?XvVf:'OzCJG%qRHM5",
                    "Parent": {
                        "_ref": "/portfolioitem/opus/72693260925",
                        "_refObjectUUID": "82e1f7cf-fa79-4aad-b1ae-7654969b6fef",
                        "_refObjectName": "Building Technics - Request management for offices in IMSYS (rationalization)",
                        "_p": "0",
                        "DisplayColor": "#848689",
                        "FormattedID": "OP5286",
                        "Name": "Building Technics - Request management for offices in IMSYS (rationalization)",
                        "Owner": {
                            "_ref": "/user/66372525105"
                        },
                        "Project": {
                            "_ref": "/project/66373364005"
                        },
                        "Tags": {
                            "_ref": "/PortfolioItem/Opus/72693260925/Tags",
                            "_type": "Tag",
                            "_tagsNameArray": [],
                            "Count": 0
                        },
                        "Attachments": {
                            "_ref": "/PortfolioItem/Opus/72693260925/Attachments",
                            "_type": "Attachment",
                            "Count": 0
                        },
                        "DirectChildrenCount": 1,
                        "DragAndDropRank": "P!#2Ny_2:P4@^cfrJ5]wL4)7VwQnw,>pihC,5&\\}*\\JxO.dLUoy7aUtQHACu=w_d",
                        "_type": "PortfolioItem/Opus"
                    },
                    "_type": "PortfolioItem/Feature"
                },
                "c_Requestor": "Annick",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/68879932017",
                "_refObjectUUID": "85248309-6f4e-44b5-861c-0dea1d3c0481",
                "_refObjectName": "Adapt query Network_optimization",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US376455",
                "Name": "Adapt query Network_optimization",
                "Owner": {
                    "_ref": "/user/66372303305",
                    "_refObjectUUID": "151adf81-18a0-4317-b531-dfd571dee390",
                    "_refObjectName": "Gert DE WILDE",
                    "_p": "0",
                    "_type": "User"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/68879932017/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "Spill-over previous Quarter",
                            "_ref": "/tag/66106748569"
                        }
                    ],
                    "Count": 2
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/68879932017/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/68879932017/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/68879932017/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!0\\,DwQyEW&\"R$(Y*Q(%BAS\\$4/76}Hu<0Y8v@b7Dmh[E#H}h]89|$J!?&J={>e",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/68879932017/Tasks",
                    "_type": "Task",
                    "Count": 1
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/68879932017/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72655041697",
                    "_refObjectUUID": "9f0c52a3-55a0-4b26-8820-f31095585771",
                    "_refObjectName": "BT - DM - Demand management small changes (IMSYS) Q4 - 2022",
                    "_p": "7",
                    "DisplayColor": "#848689",
                    "FormattedID": "F51197",
                    "Name": "BT - DM - Demand management small changes (IMSYS) Q4 - 2022",
                    "Owner": {
                        "_ref": "/user/66372341721"
                    },
                    "Project": {
                        "_ref": "/project/66811577677"
                    },
                    "Tags": {
                        "_ref": "/PortfolioItem/Feature/72655041697/Tags",
                        "_type": "Tag",
                        "_tagsNameArray": [
                            {
                                "Name": "Demand management",
                                "_ref": "/tag/67131756153"
                            }
                        ],
                        "Count": 0
                    },
                    "Attachments": {
                        "_ref": "/PortfolioItem/Feature/72655041697/Attachments",
                        "_type": "Attachment",
                        "Count": 0
                    },
                    "DirectChildrenCount": 47,
                    "DragAndDropRank": "P!4g!|~|'WZv04@4GE0nQOZ[#[7PJ\\k]FB_O\\P`#zT5El+yTt-$Nc1rYab?6NYRe",
                    "Parent": {
                        "_ref": "/portfolioitem/opus/66801489677",
                        "_refObjectUUID": "04edce3b-4f09-4168-9dd1-b092e3d5f8d5",
                        "_refObjectName": "HSS - Demand Management (Building project) review (Process & Tools)",
                        "_p": "0",
                        "DisplayColor": "#848689",
                        "FormattedID": "OP2003",
                        "Name": "HSS - Demand Management (Building project) review (Process & Tools)",
                        "Owner": {
                            "_ref": "/user/65128621309"
                        },
                        "Project": {
                            "_ref": "/project/66373364005"
                        },
                        "Tags": {
                            "_ref": "/PortfolioItem/Opus/66801489677/Tags",
                            "_type": "Tag",
                            "_tagsNameArray": [
                                {
                                    "Name": "FUN_SQ_Housing",
                                    "_ref": "/tag/69824427205"
                                }
                            ],
                            "Count": 0
                        },
                        "Attachments": {
                            "_ref": "/PortfolioItem/Opus/66801489677/Attachments",
                            "_type": "Attachment",
                            "Count": 0
                        },
                        "DirectChildrenCount": 11,
                        "DragAndDropRank": "P!#2Nyqx'<eSbzte\\Fx%LO!gz:VjcC8o\"c_GX9sC)4F.y1I/xF>9AJx:GVSX{jKp",
                        "_type": "PortfolioItem/Opus"
                    },
                    "_type": "PortfolioItem/Feature"
                },
                "c_Requestor": "Annick Heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72714089061",
                "_refObjectUUID": "e0b59bb3-63ec-4e04-a710-132ed2b001f8",
                "_refObjectName": "[Continued] New RPB structure in Imsys - Prod deployment",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US549587",
                "Name": "[Continued] New RPB structure in Imsys - Prod deployment",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72714089061/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "Spill-over previous Quarter",
                            "_ref": "/tag/66106748569"
                        }
                    ],
                    "Count": 2
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72714089061/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72714089061/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72714089061/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!4:tg!H?/%Qul7m5`j9D?V!h0lq'_}Tr%?p_26K3+0IP3NLN}m%1Cb!>0UvuGo*",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72714089061/Tasks",
                    "_type": "Task",
                    "Count": 7
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72714089061/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72876955833"
                },
                "c_Requestor": "Annick Heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72871938481",
                "_refObjectUUID": "bcc1f20f-a76a-41e9-b6e1-017832bb1f4e",
                "_refObjectName": "[Install] New RPB structure in Imsys - Prod deployment",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US576614",
                "Name": "[Install] New RPB structure in Imsys - Prod deployment",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72871938481/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72871938481/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72871938481/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72871938481/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!4:tls_n/%Qul7m5`j9D?V!h0lq'_}Tr%?p_26K3+0IP3NLN}m%1Cb!>0UvuGo*",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72871938481/Tasks",
                    "_type": "Task",
                    "Count": 5
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72871938481/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72442363137",
                    "_refObjectUUID": "bf54a315-d622-4aa6-a0d2-5258a939386c",
                    "_refObjectName": "NCO - BT - DM : Remediation actions for IMSYS",
                    "_p": "7",
                    "DisplayColor": "#4a1d7e",
                    "FormattedID": "F49390",
                    "Name": "NCO - BT - DM : Remediation actions for IMSYS",
                    "Owner": {
                        "_ref": "/user/66372525105"
                    },
                    "Project": {
                        "_ref": "/project/66811577677"
                    },
                    "Tags": {
                        "_ref": "/PortfolioItem/Feature/72442363137/Tags",
                        "_type": "Tag",
                        "_tagsNameArray": [
                            {
                                "Name": "@NCO_DRH",
                                "_ref": "/tag/72501288713"
                            }
                        ],
                        "Count": 0
                    },
                    "Attachments": {
                        "_ref": "/PortfolioItem/Feature/72442363137/Attachments",
                        "_type": "Attachment",
                        "Count": 0
                    },
                    "DirectChildrenCount": 7,
                    "DragAndDropRank": "O~|5C;2Y`Vph.=4/NEo2B/:;/38{(^UCA`nh0?;ZT+Z~@E4!hFM\\v#*e2LFL8l!\\",
                    "Parent": {
                        "_ref": "/portfolioitem/opus/72162906349"
                    },
                    "_type": "PortfolioItem/Feature"
                },
                "c_Requestor": "Annick Heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72714088705",
                "_refObjectUUID": "564fe0d3-cd26-4c54-91d3-545ad76beb2c",
                "_refObjectName": "[Validation] New RPB structure in Imsys - SP6",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US549586",
                "Name": "[Validation] New RPB structure in Imsys - SP6",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72714088705/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        },
                        {
                            "Name": "Spill-over previous Quarter",
                            "_ref": "/tag/66106748569"
                        }
                    ],
                    "Count": 2
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72714088705/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72714088705/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72714088705/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!4:trgw?/%Qul7m5`j9D?V!h0lq'_}Tr%?p_26K3+0IP3NLN}m%1Cb!>0UvuGo*",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72714088705/Tasks",
                    "_type": "Task",
                    "Count": 7
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72714088705/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72442363137"
                },
                "c_Requestor": "Annick Heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72871928929",
                "_refObjectUUID": "078759a0-8245-4dda-8bd0-f3ad4ab6634d",
                "_refObjectName": "New RPB structure in Imsys - SP6",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US576606",
                "Name": "New RPB structure in Imsys - SP6",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72871928929/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72871928929/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72871928929/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72871928929/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!4:u&D_n/%Qul7m5`j9D?V!h0lq'_}Tr%?p_26K3+0IP3NLN}m%1Cb!>0UvuGo*",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72871928929/Tasks",
                    "_type": "Task",
                    "Count": 6
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72871928929/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72442363137"
                },
                "c_Requestor": "Annick Heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72872063797",
                "_refObjectUUID": "24a03b06-725c-4b6d-b31b-fc750ad04da5",
                "_refObjectName": "[Unfinished] Stop accès back office imsys",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US576616",
                "Name": "[Unfinished] Stop accès back office imsys",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72872063797/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72872063797/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72872063797/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72872063797/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!6dr}Psif9?2P`g5Hmvc$zgNMt/NuWr3jQghOnA{ThE&l]%Qnl^^d;|K9d,Rf.z",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72872063797/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72872063797/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72655041697"
                },
                "c_Requestor": "annick heynderickx",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72758134813",
                "_refObjectUUID": "be9847db-5b91-4de2-9ffb-16c82a278830",
                "_refObjectName": "10_ 11-19-04-2021 Issues_Open.xlsx",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US554159",
                "Name": "10_ 11-19-04-2021 Issues_Open.xlsx",
                "Owner": {
                    "_ref": "/user/66372303305"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72758134813/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72758134813/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72758134813/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72758134813/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!7.l\\fjAc5/DM?K6X~S2.I.T+3%zix:0A86p'$Bzxq!fL4J,F}qi.1du7VW9D)i",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72758134813/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72758134813/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72726603777"
                },
                "c_Requestor": "ANNICK HEYNDERICKX",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72873267409",
                "_refObjectUUID": "37676341-83b9-4258-8005-c3f808d1c424",
                "_refObjectName": "Self Park - NCO",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US576907",
                "Name": "Self Park - NCO",
                "Owner": {
                    "_ref": "/user/66372341721"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72873267409/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72873267409/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72873267409/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72873267409/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!7}k\\fjAc5/DM?K6X~S2.I.T+3%zix:0A86p'$Bzxq!fL4J,F}qi.1d|B;jg3Qt",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72873267409/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72873267409/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72876955833"
                },
                "c_Requestor": "Heyndrickx Annick",
                "_type": "HierarchicalRequirement"
            },
            {
                "_ref": "/hierarchicalrequirement/72887149557",
                "_refObjectUUID": "6b8a58b2-2de3-4166-9eb4-32a89d1527c1",
                "_refObjectName": "Add relocates in query Press BNP Paribas Fortis",
                "_p": "7",
                "DisplayColor": "#21a2e0",
                "FormattedID": "US578140",
                "Name": "Add relocates in query Press BNP Paribas Fortis",
                "Owner": {
                    "_ref": "/user/66372303305"
                },
                "Project": {
                    "_ref": "/project/66811577677"
                },
                "Tags": {
                    "_ref": "/HierarchicalRequirement/72887149557/Tags",
                    "_type": "Tag",
                    "_tagsNameArray": [
                        {
                            "Name": "Demand management",
                            "_ref": "/tag/67131756153"
                        }
                    ],
                    "Count": 1
                },
                "Attachments": {
                    "_ref": "/HierarchicalRequirement/72887149557/Attachments",
                    "_type": "Attachment",
                    "Count": 0
                },
                "Children": {
                    "_ref": "/HierarchicalRequirement/72887149557/Children",
                    "_type": "HierarchicalRequirement",
                    "Count": 0
                },
                "Defects": {
                    "_ref": "/HierarchicalRequirement/72887149557/Defects",
                    "_type": "Defect",
                    "Count": 0
                },
                "DirectChildrenCount": 0,
                "DragAndDropRank": "P!8%~-fjAc5/DM?K6X~S2.I.T+3%zix:0A86p'$Bzxq!fL4J,F}qi.1d|zSj6hRA",
                "Parent": null,
                "Tasks": {
                    "_ref": "/HierarchicalRequirement/72887149557/Tasks",
                    "_type": "Task",
                    "Count": 0
                },
                "TestCases": {
                    "_ref": "/HierarchicalRequirement/72887149557/TestCases",
                    "_type": "TestCase",
                    "Count": 0
                },
                "PortfolioItem": {
                    "_ref": "/portfolioitem/feature/72726603777"
                },
                "c_Requestor": "annick heynderickx",
                "_type": "HierarchicalRequirement"
            }
        ] as any;

        return fixOwner(data);
    }
}


function fixOwner(items: Story[])
{
    const squad = location.hash.substring(2).split('/')[0] ?? '66811577677d';
    const owners = new Map<string, string>();
    for (const item of items)
    {
        if (item._ref)
        {
            item.c_StoryLink = `https://${host}/#/${squad}/userstories?detail=%2Fuserstory%2F${item._ref.split('/').at(-1)}`;
        }

        if (!item.Owner)
        {
            continue;
        }

        if (item.Owner._refObjectName)
        {
            owners.set(item.Owner._ref, item.Owner._refObjectName);
        }

        item.c_Owner = owners.get(item.Owner._ref);
    }

    return items;
}

function filter(webservice: string, from?: Date, to?: Date): URL
{
    const url = new URL(webservice);
    let query = url.searchParams.get('query');
    if (from)
    {
        query = `(${query} AND (AcceptedDate >= \"${from.toISOString().replace('Z', '+00:00')}\"))`
    }

    if (to)
    {
        query = `(${query} AND (AcceptedDate <= \"${to.toISOString().replace('Z', '+00:00')}\"))`;
    }

    url.searchParams.set('query', query);
    return url;
}