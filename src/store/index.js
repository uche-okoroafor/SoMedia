import { createStore } from 'vuex';
import { uuid } from 'vue-uuid';


export default createStore({
    state:{
    "userData": {
        "userName": "Guest",
        "emailAddress": "",
        "password": "",
        "firstName": "",
        "lastName": "",
        "gender": "",
        "address": "",
        "postCode": "",
        "country": "",
        "city": "",
        "aboutMe": "",
        "posts": [],
        "followers": [],
        "following": [],
        "friends": [],
        "age": "",
        "education": "",
        "videos": [],
        "photos": [],
        "messages": {},
        "messageStatus": {},
        "notifications": {},
        "occupation": "",
        "status": "online",
        "activities": {},
        "userCoverImage": "/img/defaultBg.2793204e.jpg",
        "userId": "421e0e80-e3f9-11eb-9bd2-1f6ecf431b77",
        "userProfileImage": "/img/User.de2ba6b9.png"
    },
    "displayFunctions": {
        "navCollapsed": false,
        "loginPageUnmounted": true,
        "activeLink": "userProfile",
        "displayMessage": {
            "userName": ""
        },
        "footerOnScreen": false,
        "photosCompOnScreen": false,
        "componentMounted": "",
        "suspendMessageUpdate": false,
        "displayClickedImage": {
            "imageUrl": "blob:http://localhost:8080/fae1eef1-4949-40cf-955f-e79b75c8263d",
            "imageId": "09f996d0-e199-11eb-871f-0f966330432a"
        }
    },
    "user": {
        "Ruby": {
            "userName": "Ruby",
            "emailAddress": "Ruby@email.com",
            "password": "somedia",
            "firstName": "Ruby",
            "lastName": "Jones",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [],
            "messages": {},
            "messageStatus": {},
            "notifications": {},
            "occupation": "",
            "status": "online",
            "activities": {
                "964fa440-db3a-11eb-af32-47b0df65ae76": {
                    "userName": "Ruby",
                    "activity": "Created account",
                    "activityDate": 1625233024132,
                    "activityId": "964fa440-db3a-11eb-af32-47b0df65ae76"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "964f7d30-db3a-11eb-af32-47b0df65ae76",
            "userProfileImage": "/img/User.de2ba6b9.png"
        }
    },
    "users": {
        "james": {
            "userName": "james",
            "emailAddress": "",
            "password": "james",
            "firstName": "",
            "lastName": "",
            "gender": "male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [],
            "messages": {},
            "chatList": [],
            "messageStatus": {},
            "notifications": {
                "c1c2bec0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "james",
                    "notificationId": "c1c2bec0-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835680940
                },
                "c66c1870-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "james",
                    "notificationId": "c66c1870-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051296119
                },
                "c7f04770-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "james",
                    "notificationId": "c7f04770-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051298663
                },
                "cbed3ea0-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "james",
                    "notificationId": "cbed3ea0-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051305354
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "6155556545": {
                    "userName": "james",
                    "activityId": 6155545,
                    "activity": "Created account",
                    "activityDate": 1618065197268
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "uuid.v1()",
            "userProfileImage": "/img/User.de2ba6b9.png"
        },
        "uche": {
            "userName": "uche",
            "gender": "male",
            "education": "Guest",
            "emailAddress": "uche@gmail.com",
            "password": "uche",
            "userId": "31",
            "firstName": "",
            "lastName": "",
            "address": "",
            "userCoverImage": "/img/coverimg1.e953fbf3.jpeg",
            "userProfileImage": "/img/user5.4ea7134a.jpeg",
            "postCode": "Guest",
            "country": "Guest",
            "city": "Guest",
            "aboutMe": "Guest",
            "occupation": "Guest",
            "age": "27",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "/img/pic1.02bad215.jpeg",
                    "imageId": 1
                },
                {
                    "imageUrl": "/img/pic2.c33b0f77.jpeg",
                    "imageId": 2
                },
                {
                    "imageUrl": "/img/pic3.5ea156ca.jpeg",
                    "imageId": 3
                },
                {
                    "imageUrl": "/img/pic4.a30bc33b.jpg",
                    "imageId": 4
                },
                {
                    "imageUrl": "/img/pic5.0cb9381e.jpeg",
                    "imageId": 5
                },
                {
                    "imageUrl": "/img/pic6.60b54a17.jpeg",
                    "imageId": 6
                },
                {
                    "imageUrl": "/img/pic7.1a4477d9.jpeg",
                    "imageId": 7
                },
                {
                    "imageUrl": "/img/pic8.5e9d4abf.jpeg",
                    "imageId": 8
                },
                {
                    "imageUrl": "/img/pic9.4b3c0f27.jpeg",
                    "imageId": 9
                },
                {
                    "imageUrl": "/img/pic10.352e426b.jpeg",
                    "imageId": 10
                },
                {
                    "imageUrl": "/img/pic11.6c92b0e2.jpeg",
                    "imageId": 11
                },
                {
                    "imageUrl": "/img/pic12.29d695dc.jpeg",
                    "imageId": 12
                }
            ],
            "status": "online",
            "messages": {
                "chigo": {
                    "4752": {
                        "userName": "chigo",
                        "messageId": "4752",
                        "messageStatus": "received",
                        "messageDate": 1618065193922,
                        "message": "i am fine and you"
                    },
                    "23335": {
                        "userName": "uche",
                        "messageId": "23335",
                        "messageStatus": "Read",
                        "messageDate": 1618065881819,
                        "message": "am good"
                    },
                    "55666": {
                        "userName": "chigo",
                        "messageId": "55666",
                        "messageStatus": "received",
                        "messageDate": 1618050881819,
                        "message": "good day boss"
                    },
                    "55668": {
                        "userName": "uche",
                        "messageId": "55668",
                        "messageStatus": "Read",
                        "messageDate": 1618060881819,
                        "message": "how are u bro"
                    }
                },
                "bose": {
                    "85426": {
                        "userName": "uche",
                        "messageId": "85426",
                        "messageStatus": "Read",
                        "messageDate": 1618065193900,
                        "message": "hi,how are you"
                    },
                    "236541": {
                        "userName": "bose",
                        "messageId": "236541",
                        "messageStatus": "received",
                        "messageDate": 1618065193000,
                        "message": "i am fine"
                    },
                    "522333": {
                        "userName": "bose",
                        "messageId": "522333",
                        "messageStatus": "received",
                        "messageDate": 1618065193975,
                        "message": "hello"
                    },
                    "1233658": {
                        "userName": "uche",
                        "messageId": "1233658",
                        "messageStatus": "Read",
                        "messageDate": 1618065190000,
                        "message": "its good to meet you"
                    }
                }
            },
            "messageStatus": {
                "chigo": {
                    "messageViewStatus": "unRead",
                    "messageOnScreen": false,
                    "userName": "uche",
                    "friendMessaged": "chigo",
                    "messageDate": 1618065188888,
                    "showMessage": false
                },
                "bose": {
                    "messageViewStatus": "unRead",
                    "messageOnScreen": false,
                    "userName": "uche",
                    "friendMessaged": "bose",
                    "messageDate": 1618065199999,
                    "showMessage": true
                }
            },
            "posts": [],
            "activities": {},
            "followers": [
                {
                    "userName": "chigo",
                    "userId": "21"
                },
                {
                    "userName": "chinedu",
                    "userId": "25"
                }
            ],
            "following": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "bose",
                    "userId": "18"
                }
            ],
            "friends": [
                {
                    "userName": "chinedu",
                    "userId": "25"
                },
                {
                    "userName": "chigo",
                    "userId": "21"
                },
                {
                    "userName": "bose",
                    "userId": "18"
                }
            ],
            "notifications": {
                "ca7fc260-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "posterUserName": "uche",
                    "notificationId": "ca7fc260-db4c-11eb-abaf-9f6519f91aa1",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625240842630
                },
                "ca7fc261-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "posterUserName": "uche",
                    "notificationId": "ca7fc261-db4c-11eb-abaf-9f6519f91aa1",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625240842630
                },
                "c0a4cba0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "uche",
                    "notificationId": "c0a4cba0-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835679066
                }
            }
        },
        "bose": {
            "userName": "bose",
            "gender": "female",
            "firstName": "",
            "lastName": "",
            "userCoverImage": "/img/coverimg2.31a88bb0.jpeg",
            "userProfileImage": "/img/user1.34b945ce.jpeg",
            "postCode": "Guest",
            "country": "Guest",
            "city": "Guest",
            "aboutMe": "Guest",
            "occupation": "Guest",
            "education": "",
            "age": "27",
            "emailAddress": "bose@gmail.com",
            "password": "bose",
            "userId": "18",
            "status": "online",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "/img/pic1.02bad215.jpeg",
                    "imageId": 1
                },
                {
                    "imageUrl": "/img/pic2.c33b0f77.jpeg",
                    "imageId": 2
                },
                {
                    "imageUrl": "/img/pic3.5ea156ca.jpeg",
                    "imageId": 3
                },
                {
                    "imageUrl": "/img/pic4.a30bc33b.jpg",
                    "imageId": 4
                },
                {
                    "imageUrl": "/img/pic5.0cb9381e.jpeg",
                    "imageId": 5
                },
                {
                    "imageUrl": "/img/pic6.60b54a17.jpeg",
                    "imageId": 6
                },
                {
                    "imageUrl": "/img/pic7.1a4477d9.jpeg",
                    "imageId": 7
                },
                {
                    "imageUrl": "/img/pic8.5e9d4abf.jpeg",
                    "imageId": 8
                },
                {
                    "imageUrl": "/img/pic9.4b3c0f27.jpeg",
                    "imageId": 9
                },
                {
                    "imageUrl": "/img/pic10.352e426b.jpeg",
                    "imageId": 10
                },
                {
                    "imageUrl": "/img/pic11.6c92b0e2.jpeg",
                    "imageId": 11
                },
                {
                    "imageUrl": "/img/pic12.29d695dc.jpeg",
                    "imageId": 12
                }
            ],
            "messages": {
                "uche": {
                    "85426": {
                        "userName": "uche",
                        "messageId": "85426",
                        "messageStatus": "Read",
                        "messageDate": 1618065193900,
                        "message": "hi,how are you"
                    },
                    "236541": {
                        "userName": "bose",
                        "messageId": "236541",
                        "messageStatus": "received",
                        "messageDate": 1618065193905,
                        "message": "i am fine"
                    },
                    "522333": {
                        "userName": "bose",
                        "messageId": "522333",
                        "messageStatus": "received",
                        "messageDate": 1618065193975,
                        "message": "hello"
                    },
                    "1233658": {
                        "userName": "uche",
                        "messageId": "1233658",
                        "messageStatus": "Read",
                        "messageDate": 1618065193975,
                        "message": "its good to meet you"
                    }
                },
                "chigo": {
                    "5564": {
                        "userName": "chigo",
                        "messageStatus": "Read",
                        "messageDate": 1618065193135,
                        "messageId": 5564,
                        "message": "life is good"
                    },
                    "8856": {
                        "userName": "bose",
                        "messageStatus": "Read",
                        "messageDate": 1618065197268,
                        "messageId": 8856,
                        "message": "try harder brother"
                    },
                    "54452": {
                        "userName": "chigo",
                        "messageStatus": "Read",
                        "messageDate": 1618065193555,
                        "messageId": 54452,
                        "message": "work work work"
                    }
                }
            },
            "messageStatus": {
                "chigo": {
                    "friendMessaged": "chigo",
                    "userName": "bose",
                    "messageOnScreen": true,
                    "messageViewStatus": "read",
                    "messageDate": 1625326551504,
                    "showMessage": true
                },
                "uche": {
                    "friendMessaged": "uche",
                    "userName": "bose",
                    "messageViewStatus": "Read",
                    "messageDate": 1625326538773,
                    "showMessage": false
                }
            },
            "posts": [
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "bose",
                    "userId": "18",
                    "postId": "565sd6",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1619870462772,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeThree",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                }
            ],
            "activities": {
                "6155545": {
                    "userName": "bose",
                    "activityId": 6155545,
                    "activity": "posted",
                    "activityDate": 1618065197268
                },
                "65a88b30-db3b-11eb-8f0e-f36b708cede7": {
                    "userName": "bose",
                    "activity": "logged in",
                    "activityDate": 1625233372003,
                    "activityId": "65a88b30-db3b-11eb-8f0e-f36b708cede7"
                },
                "f1db9c60-e0c6-11eb-b6c9-55522da2a112": {
                    "userName": "bose",
                    "activity": "logged in",
                    "activityDate": 1625843063078,
                    "activityId": "f1db9c60-e0c6-11eb-b6c9-55522da2a112"
                }
            },
            "followers": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "chinedu",
                    "userId": "25"
                }
            ],
            "following": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "chinedu",
                    "userId": "25"
                }
            ],
            "friends": [
                {
                    "userName": "chigo",
                    "userId": "31"
                },
                {
                    "userName": "uche"
                }
            ],
            "notifications": {
                "26266": {
                    "userName": "chigo",
                    "notificationType": "comment",
                    "posterUserName": "uche",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                },
                "4526522": {
                    "userName": "uche",
                    "notificationType": "message",
                    "notificationId": "4526522",
                    "notificationStatus": "Read",
                    "notificationDate": 1618065197268
                },
                "26265206": {
                    "userName": "chigo",
                    "notificationType": "likes",
                    "posterUserName": "uche",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                },
                "279e8ea0-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "bose",
                    "notificationId": "279e8ea0-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625418810506
                },
                "c2b02c00-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "bose",
                    "notificationId": "c2b02c00-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835682496
                }
            }
        },
        "john": {
            "userName": "john",
            "gender": "male",
            "userCoverImage": "/img/coverimg3.cd93b2dc.jpeg",
            "userProfileImage": "/img/user3.1769dfcc.jpeg",
            "postCode": "Guest",
            "country": "Guest",
            "city": "Guest",
            "aboutMe": "Guest",
            "occupation": "Guest",
            "education": "",
            "age": "27",
            "emailAddress": "john@gmail.com",
            "password": "john",
            "userId": "18",
            "status": "offline",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "/img/pic1.02bad215.jpeg",
                    "imageId": 1
                },
                {
                    "imageUrl": "/img/pic2.c33b0f77.jpeg",
                    "imageId": 2
                },
                {
                    "imageUrl": "/img/pic3.5ea156ca.jpeg",
                    "imageId": 3
                },
                {
                    "imageUrl": "/img/pic4.a30bc33b.jpg",
                    "imageId": 4
                },
                {
                    "imageUrl": "/img/pic5.0cb9381e.jpeg",
                    "imageId": 5
                },
                {
                    "imageUrl": "/img/pic6.60b54a17.jpeg",
                    "imageId": 6
                },
                {
                    "imageUrl": "/img/pic7.1a4477d9.jpeg",
                    "imageId": 7
                },
                {
                    "imageUrl": "/img/pic8.5e9d4abf.jpeg",
                    "imageId": 8
                },
                {
                    "imageUrl": "/img/pic9.4b3c0f27.jpeg",
                    "imageId": 9
                },
                {
                    "imageUrl": "/img/pic10.352e426b.jpeg",
                    "imageId": 10
                },
                {
                    "imageUrl": "/img/pic11.6c92b0e2.jpeg",
                    "imageId": 11
                },
                {
                    "imageUrl": "/img/pic12.29d695dc.jpeg",
                    "imageId": 12
                }
            ],
            "messages": {
                "chinedu": {
                    "85426": {
                        "userName": "chinedu",
                        "messageId": "85426",
                        "messageStatus": "sent",
                        "messageDate": 1618065193900,
                        "message": "hi,how are you"
                    },
                    "237549": {
                        "userName": "john",
                        "messageId": "237549",
                        "messageStatus": "sent",
                        "messageDate": 1618065193905,
                        "message": "i am fine"
                    },
                    "522333": {
                        "userName": "john",
                        "messageId": "522333",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "message": "hello"
                    },
                    "1233658": {
                        "userName": "chinedu",
                        "messageId": "1233658",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "message": "its good to meet you"
                    }
                }
            },
            "messageStatus": {
                "chinedu": {
                    "messageViewStatus": "unRead",
                    "messageOnScreen": false,
                    "userName": "john",
                    "friendMessaged": "chinedu",
                    "messageDate": 1618065199999,
                    "showMessage": true
                }
            },
            "posts": [],
            "activities": {},
            "followers": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "bose",
                    "userId": "25"
                }
            ],
            "following": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "bose",
                    "userId": "25"
                }
            ],
            "friends": [
                {
                    "userName": "chigo",
                    "userId": "21"
                }
            ],
            "notifications": {
                "45262": {
                    "userName": "chigo",
                    "notificationType": "friend request",
                    "notificationId": "45262",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                },
                "4526522": {
                    "userName": "uche",
                    "notificationType": "message",
                    "notificationId": "4526522",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                }
            }
        },
        "chinedu": {
            "userName": "chinedu",
            "gender": "male",
            "userCoverImage": "/img/coverimg4.3ba6e2e1.jpeg",
            "userProfileImage": "/img/user2.3cfb31b3.jpeg",
            "postCode": "Guest",
            "country": "Guest",
            "city": "Guest",
            "aboutMe": "Guest",
            "occupation": "Guest",
            "education": "",
            "age": "27",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "/img/pic1.02bad215.jpeg",
                    "imageId": 1
                },
                {
                    "imageUrl": "/img/pic2.c33b0f77.jpeg",
                    "imageId": 2
                },
                {
                    "imageUrl": "/img/pic3.5ea156ca.jpeg",
                    "imageId": 3
                },
                {
                    "imageUrl": "/img/pic4.a30bc33b.jpg",
                    "imageId": 4
                },
                {
                    "imageUrl": "/img/pic5.0cb9381e.jpeg",
                    "imageId": 5
                },
                {
                    "imageUrl": "/img/pic6.60b54a17.jpeg",
                    "imageId": 6
                },
                {
                    "imageUrl": "/img/pic7.1a4477d9.jpeg",
                    "imageId": 7
                },
                {
                    "imageUrl": "/img/pic8.5e9d4abf.jpeg",
                    "imageId": 8
                },
                {
                    "imageUrl": "/img/pic9.4b3c0f27.jpeg",
                    "imageId": 9
                },
                {
                    "imageUrl": "/img/pic10.352e426b.jpeg",
                    "imageId": 10
                },
                {
                    "imageUrl": "/img/pic11.6c92b0e2.jpeg",
                    "imageId": 11
                },
                {
                    "imageUrl": "/img/pic12.29d695dc.jpeg",
                    "imageId": 12
                }
            ],
            "emailAddress": "chinedu@gmail.com",
            "password": "chinedu",
            "userId": "18",
            "status": "offline",
            "messages": {
                "john": {
                    "85426": {
                        "userName": "john",
                        "messageId": "85426",
                        "messageStatus": "sent",
                        "messageDate": 1618065193900,
                        "message": "hi,how are you"
                    },
                    "237549": {
                        "userName": "chinedu",
                        "messageId": "237549",
                        "messageStatus": "sent",
                        "messageDate": 1618065193905,
                        "message": "i am fine"
                    },
                    "522333": {
                        "userName": "chinedu",
                        "messageId": "522333",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "message": "hello"
                    },
                    "1233658": {
                        "userName": "john",
                        "messageId": "1233658",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "message": "its good to meet you"
                    }
                },
                "chigo": {
                    "5564": {
                        "userName": "chigo",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "messageId": 5564,
                        "message": "work work work"
                    },
                    "8856": {
                        "userName": "chinedu",
                        "messageStatus": "Read",
                        "messageDate": 1618065193900,
                        "messageId": 8856,
                        "message": "this is life for you"
                    },
                    "88564": {
                        "userName": "chinedu",
                        "messageStatus": "Read",
                        "messageDate": 1618065193700,
                        "messageId": 88564,
                        "message": "try harder brother"
                    },
                    "555664": {
                        "userName": "chigo",
                        "messageStatus": "sent",
                        "messageDate": 1618065193800,
                        "messageId": 555664,
                        "message": "life is good"
                    }
                }
            },
            "messageStatus": {
                "chigo": {
                    "messageViewStatus": "unRead",
                    "messageOnScreen": false,
                    "userName": "chinedu",
                    "friendMessaged": "chigo",
                    "messageDate": 1618065194563,
                    "showMessage": true
                },
                "john": {
                    "messageViewStatus": "unRead",
                    "messageOnScreen": false,
                    "userName": "chinedu",
                    "friendMessaged": "john",
                    "messageDate": 1618065148751,
                    "showMessage": false
                }
            },
            "posts": [
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chinedu",
                    "userId": "31",
                    "postId": "555umk45ghgh651",
                    "views": [
                        "Josh",
                        "Liam",
                        "Lily",
                        "Nova",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "postImages": [],
                    "postVideos": {
                        "videoUrl": "/media/vid1.7ecbb091.mp4",
                        "videoId": "55xx6rrt",
                        "videoAutoplay": false
                    },
                    "datePosted": 1625074182031,
                    "posts": "Me on a makeup class",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-theme-default",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "john",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                }
            ],
            "activities": {},
            "followers": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "bose",
                    "userId": "25"
                },
                {
                    "userName": "Smith"
                }
            ],
            "following": [
                {
                    "userName": "uche",
                    "userId": "31"
                },
                {
                    "userName": "bose",
                    "userId": "25"
                }
            ],
            "friends": [],
            "notifications": {
                "45262": {
                    "userName": "chigo",
                    "notificationType": "friend request",
                    "notificationId": "45262",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                },
                "4526522": {
                    "userName": "uche",
                    "notificationType": "message",
                    "notificationId": "4526522",
                    "notificationStatus": "unRead",
                    "notificationDate": 1618065197268
                },
                "c50c8870-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "chinedu",
                    "notificationId": "c50c8870-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051293815
                }
            }
        },
        "chigo": {
            "userName": "chigo",
            "gender": "male",
            "userCoverImage": "/img/coverimg5.1d43264e.jpeg",
            "userProfileImage": "/img/user4.8e1d6043.jpeg",
            "postCode": "Guest",
            "country": "Guest",
            "city": "Guest",
            "aboutMe": "Guest",
            "occupation": "Guest",
            "education": "",
            "age": "27",
            "videos": [],
            "photos": [],
            "emailAddress": "chigo@gmail.com",
            "password": "chigo",
            "userId": "21",
            "status": "online",
            "messages": {
                "uche": {
                    "4752": {
                        "userName": "chigo",
                        "messageId": "4752",
                        "messageStatus": "received",
                        "messageDate": 1618065193945,
                        "message": "i am fine and you"
                    },
                    "23335": {
                        "userName": "uche",
                        "messageId": "23335",
                        "messageStatus": "Read",
                        "messageDate": 1618065881819,
                        "message": "am good"
                    },
                    "55666": {
                        "userName": "chigo",
                        "messageId": "55666",
                        "messageStatus": "received",
                        "messageDate": 1618065193487,
                        "message": "good day boss"
                    },
                    "55668": {
                        "userName": "uche",
                        "messageId": "55668",
                        "messageStatus": "Read",
                        "messageDate": 1618065193975,
                        "message": "how are u bro"
                    }
                },
                "bose": {
                    "5564": {
                        "userName": "chigo",
                        "messageStatus": "Read",
                        "messageDate": 1618065193900,
                        "messageId": 5564,
                        "message": "life is good"
                    },
                    "8856": {
                        "userName": "bose",
                        "messageStatus": "Read",
                        "messageDate": 1618065193922,
                        "messageId": 8856,
                        "message": "try harder brother"
                    },
                    "54452": {
                        "userName": "chigo",
                        "messageStatus": "Read",
                        "messageDate": 1618065193975,
                        "messageId": 54452,
                        "message": "work work work"
                    }
                },
                "chinedu": {
                    "5564": {
                        "userName": "chigo",
                        "messageStatus": "sent",
                        "messageDate": 1618065193975,
                        "messageId": 5564,
                        "message": "work work work"
                    },
                    "8856": {
                        "userName": "chinedu",
                        "messageStatus": "Read",
                        "messageDate": 1618065193900,
                        "messageId": 8856,
                        "message": "this is life for you"
                    },
                    "88564": {
                        "userName": "chinedu",
                        "messageStatus": "Read",
                        "messageDate": 1618065193700,
                        "messageId": 88564,
                        "message": "try harder brother"
                    },
                    "555664": {
                        "userName": "chigo",
                        "messageStatus": "sent",
                        "messageDate": 1618065193800,
                        "messageId": 555664,
                        "message": "life is good"
                    }
                }
            },
            "messageStatus": {
                "uche": {
                    "friendMessaged": "uche",
                    "userName": "chigo",
                    "messageViewStatus": "Read",
                    "messageDate": 1625327467212,
                    "showMessage": false,
                    "messageOnScreen": "off"
                },
                "bose": {
                    "friendMessaged": "bose",
                    "userName": "chigo",
                    "messageViewStatus": "Read",
                    "messageDate": 1625327468483,
                    "showMessage": false,
                    "messageOnScreen": "off"
                },
                "chinedu": {
                    "friendMessaged": "chinedu",
                    "userName": "chigo",
                    "messageOnScreen": "off",
                    "messageViewStatus": "Read",
                    "messageDate": 1625327614382,
                    "showMessage": true
                }
            },
            "posts": [
                {
                    "userName": "chigo",
                    "userId": "21",
                    "postId": "1xcfg",
                    "postImages": [
                        ""
                    ],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065173905,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeSeven",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "chigo",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chigo",
                    "postId": "3sdaawf",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065143905,
                    "userId": "21",
                    "posts": "life is good",
                    "likes": [],
                    "postStyle": "text-themeFour",
                    "posterComment": "",
                    "unLikes": [],
                    "comments": {
                        "5": {
                            "userName": "chigo",
                            "commentId": "5",
                            "dateCommented": 1618065145905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "6": {
                            "userName": "chigo",
                            "commentId": "6",
                            "dateCommented": 1618065146905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chigo",
                    "userId": "21",
                    "postId": "1xcfg",
                    "postImages": [
                        ""
                    ],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065173905,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeSeven",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "chigo",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chigo",
                    "postId": "3sdaawf",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065143905,
                    "userId": "21",
                    "posts": "life is good",
                    "likes": [],
                    "postStyle": "text-themeFour",
                    "posterComment": "",
                    "unLikes": [],
                    "comments": {
                        "5": {
                            "userName": "chigo",
                            "commentId": "5",
                            "dateCommented": 1618065145905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "6": {
                            "userName": "chigo",
                            "commentId": "6",
                            "dateCommented": 1618065146905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chigo",
                    "userId": "21",
                    "postId": "1xcfg",
                    "postImages": [
                        ""
                    ],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065173905,
                    "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": [],
                    "postStyle": "text-themeSeven",
                    "posterComment": "",
                    "comments": {
                        "1": {
                            "userName": "chigo",
                            "commentId": "1",
                            "dateCommented": 1618065174905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "2": {
                            "userName": "uche",
                            "commentId": "2",
                            "dateCommented": 1618065175905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "3": {
                            "userName": "bose",
                            "commentId": "3",
                            "dateCommented": 1618065176905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                },
                {
                    "userName": "chigo",
                    "postId": "3sdaawf",
                    "postImages": [],
                    "postVideos": {},
                    "views": [
                        "Lily",
                        "Ruby",
                        "bose",
                        "Ivy"
                    ],
                    "datePosted": 1618065143905,
                    "userId": "21",
                    "posts": "life is good",
                    "likes": [],
                    "postStyle": "text-themeFour",
                    "posterComment": "",
                    "unLikes": [],
                    "comments": {
                        "5": {
                            "userName": "chigo",
                            "commentId": "5",
                            "dateCommented": 1618065145905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        },
                        "6": {
                            "userName": "chigo",
                            "commentId": "6",
                            "dateCommented": 1618065146905,
                            "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                            "likes": [],
                            "unLikes": []
                        }
                    }
                }
            ],
            "activities": {
                "61f0a6b0-dc14-11eb-b92d-83ee399c7af5": {
                    "userName": "chigo",
                    "activity": "logged in",
                    "activityDate": 1625326566555,
                    "activityId": "61f0a6b0-dc14-11eb-b92d-83ee399c7af5"
                }
            },
            "followers": [
                {
                    "userName": "bose",
                    "userId": "18"
                }
            ],
            "following": [
                {
                    "userName": "bose",
                    "userId": "18"
                }
            ],
            "friends": [
                {
                    "userName": "bose",
                    "userId": "18"
                },
                {
                    "userName": "john",
                    "userId": "30"
                }
            ],
            "notifications": {
                "c36ee820-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "chigo",
                    "notificationId": "c36ee820-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835683746
                },
                "22149a30-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "chigo",
                    "notificationId": "22149a30-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935485779
                }
            }
        },
        "Carter": {
            "userName": "Carter",
            "emailAddress": "carter@email.com",
            "password": "somedia",
            "firstName": " Colton ",
            "lastName": " Maverick ",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts":[],
            "followers": [],
            "following": [],
            "friends": [
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "Ava"
                },
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Sophie"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "blob:http://localhost:8080/1683da8f-0290-4952-b59c-3a36d5065809",
                    "videoId": "a55450b0-e0b9-11eb-b036-69cc37af9c61",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl":require('../assets/postImages/carter-profilePix.jpg'),
                    "imageId": "e595d480-e0bb-11eb-bbed-5fb8923dc3e7"
                }
            ],
            "messages": {
                "Mia": {
                    "34ff7430-df4b-11eb-836f-59a9e97a569e": {
                        "userName": "Mia",
                        "messageId": "34ff7430-df4b-11eb-836f-59a9e97a569e",
                        "message": "hi",
                        "messageDate": 1625679966963,
                        "messageStatus": "Read"
                    },
                    "47573040-e0b9-11eb-b036-69cc37af9c61": {
                        "userName": "Carter",
                        "messageId": "47573040-e0b9-11eb-b036-69cc37af9c61",
                        "message": "hello how are doing",
                        "messageDate": 1625837193540,
                        "messageStatus": "sent"
                    }
                },
                "Ethan": {
                    "52ca18c0-e0b9-11eb-b036-69cc37af9c61": {
                        "userName": "Carter",
                        "messageId": "52ca18c0-e0b9-11eb-b036-69cc37af9c61",
                        "message": "hello,boss",
                        "messageDate": 1625837212748,
                        "messageStatus": "sent"
                    }
                }
            },
            "messageStatus": {
                "Mia": {
                    "friendMessaged": "Mia",
                    "userName": "Carter",
                    "messageOnScreen": "off",
                    "messageViewStatus": "read",
                    "messageDate": 1625837193541,
                    "showMessage": false
                },
                "Ethan": {
                    "friendMessaged": "Ethan",
                    "userName": "Carter",
                    "messageOnScreen": "off",
                    "messageViewStatus": "Read",
                    "messageDate": 1625837229240,
                    "showMessage": true
                }
            },
            "notifications": {
                "2dc088b0-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Carter",
                    "notificationId": "2dc088b0-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625418820795
                },
                "f2f49bb0-df40-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "f2f49bb0-df40-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675561195
                },
                "22770380-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Carter",
                    "notificationId": "22770380-df43-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625676499896
                },
                "34ffc250-df4b-11eb-836f-59a9e97a569e": {
                    "userName": "Mia",
                    "friendUserName": "Carter",
                    "notificationId": "34ffc250-df4b-11eb-836f-59a9e97a569e",
                    "notificationType": "message",
                    "notificationStatus": "Read",
                    "notificationDate": 1625679966965
                },
                "86b5b9a0-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "86b5b9a0-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800792634
                },
                "86b5e0b1-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "notificationId": "86b5e0b1-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800792635
                },
                "a65f0690-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Carter",
                    "notificationId": "a65f0690-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625819743609
                },
                "0c150e90-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Carter",
                    "notificationId": "0c150e90-e0ae-11eb-a170-d99d0616bfb4",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625832369657
                },
                "f0654780-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "notificationId": "f0654780-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833182200
                },
                "f0656e91-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "notificationId": "f0656e91-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833182201
                },
                "c6361e70-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Carter",
                    "notificationId": "c6361e70-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625835688407
                },
                "0a5b9dc0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "notificationId": "0a5b9dc0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837091228
                },
                "1c518f40-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Carter",
                    "notificationId": "1c518f40-e0bd-11eb-8787-59040f6b2cc8",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838839348
                },
                "1c51b650-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Carter",
                    "notificationId": "1c51b650-e0bd-11eb-8787-59040f6b2cc8",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838839350
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "9992ced0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337981
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "99931cf0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337983
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "bb25c750-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840394309
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceacfe0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397278
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceb1e00-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397280
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "cae26771-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840420711
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b53010-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430481
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b57e30-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430483
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "notificationId": "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840933636
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959241
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959242
                },
                "caee0bf0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "notificationId": "caee0bf0-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852017199
                },
                "caee3300-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "notificationId": "caee3300-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852017200
                },
                "d68c9850-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "notificationId": "d68c9850-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852036693
                },
                "d68c9851-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "notificationId": "d68c9851-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852036693
                },
                "827d0e00-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Carter",
                    "notificationId": "827d0e00-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852754656
                },
                "83bc7a80-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Carter",
                    "notificationId": "83bc7a80-e19b-11eb-871f-0f966330432a",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934361128
                },
                "ef2d2380-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Carter",
                    "notificationId": "ef2d2380-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935400376
                },
                "ef2d4a90-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Carter",
                    "notificationId": "ef2d4a90-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935400377
                },
                "faf69070-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Carter",
                    "notificationId": "faf69070-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935420151
                },
                "faf69071-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Carter",
                    "notificationId": "faf69071-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935420151
                },
                "d3d72770-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Carter",
                    "notificationId": "d3d72770-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051318631
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "1b964960-d9c9-11eb-ba8c-e9a262a433df": {
                    "userName": "Carter",
                    "activity": "Created account",
                    "activityDate": 1625074333942,
                    "activityId": "1b964960-d9c9-11eb-ba8c-e9a262a433df"
                },
                "c65c3f00-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "activity": "logged in",
                    "activityDate": 1625675056880,
                    "activityId": "c65c3f00-df3f-11eb-a210-09083f776f3d"
                },
                "de4687b1-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625675097003,
                    "activityId": "de4687b1-df3f-11eb-a210-09083f776f3d"
                },
                "e062d800-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625675100544,
                    "activityId": "e062d800-df3f-11eb-a210-09083f776f3d"
                },
                "e2753d41-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Lily",
                    "commenterUserName": "Nova",
                    "activity": "likedComment",
                    "activityDate": 1625675104020,
                    "activityId": "e2753d41-df3f-11eb-a210-09083f776f3d"
                },
                "fac96b50-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Ivy",
                    "activity": "liked",
                    "activityDate": 1625675144837,
                    "activityId": "fac96b50-df3f-11eb-a210-09083f776f3d"
                },
                "e90d0e21-df40-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "activity": "posted",
                    "activityDate": 1625675544578,
                    "activityId": "e90d0e21-df40-11eb-a210-09083f776f3d"
                },
                "f2f49bb2-df40-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625675561195,
                    "activityId": "f2f49bb2-df40-11eb-a210-09083f776f3d"
                },
                "44373870-df41-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Nova",
                    "activity": "commented",
                    "activityDate": 1625675697527,
                    "activityId": "44373870-df41-11eb-a210-09083f776f3d"
                },
                "83868e91-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ella",
                    "activity": "liked",
                    "activityDate": 1625836865017,
                    "activityId": "83868e91-e0b8-11eb-a091-bd97fb995f1d"
                },
                "aa589b31-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ella",
                    "activity": "commented",
                    "activityDate": 1625836930147,
                    "activityId": "aa589b31-e0b8-11eb-a091-bd97fb995f1d"
                },
                "adf71eb1-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625836936219,
                    "activityId": "adf71eb1-e0b8-11eb-a091-bd97fb995f1d"
                },
                "cfbd3520-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ethan",
                    "activity": "commented",
                    "activityDate": 1625836992882,
                    "activityId": "cfbd3520-e0b8-11eb-a091-bd97fb995f1d"
                },
                "0a5b76b0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "activity": "likedComment",
                    "activityDate": 1625837091227,
                    "activityId": "0a5b76b0-e0b9-11eb-b036-69cc37af9c61"
                },
                "2565eb20-e0b9-11eb-b036-69cc37af9c61": {
                    "friendUserName": "Ethan",
                    "userName": "Carter",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625837136594,
                    "activityId": "2565eb20-e0b9-11eb-b036-69cc37af9c61"
                },
                "27470730-e0b9-11eb-b036-69cc37af9c61": {
                    "friendUserName": "Ava",
                    "userName": "Carter",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625837139747,
                    "activityId": "27470730-e0b9-11eb-b036-69cc37af9c61"
                },
                "28207740-e0b9-11eb-b036-69cc37af9c61": {
                    "friendUserName": "Ella",
                    "userName": "Carter",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625837141172,
                    "activityId": "28207740-e0b9-11eb-b036-69cc37af9c61"
                },
                "292b7ea0-e0b9-11eb-b036-69cc37af9c61": {
                    "friendUserName": "Lily",
                    "userName": "Carter",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625837142922,
                    "activityId": "292b7ea0-e0b9-11eb-b036-69cc37af9c61"
                },
                "2a1e9130-e0b9-11eb-b036-69cc37af9c61": {
                    "friendUserName": "Sophie",
                    "userName": "Carter",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625837144515,
                    "activityId": "2a1e9130-e0b9-11eb-b036-69cc37af9c61"
                },
                "a5549ed0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "activity": "posted",
                    "activityDate": 1625837351229,
                    "activityId": "a5549ed0-e0b9-11eb-b036-69cc37af9c61"
                },
                "f52f5c40-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625838344196,
                    "activityId": "f52f5c40-e0bb-11eb-bbed-5fb8923dc3e7"
                },
                "f69e0770-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625838346599,
                    "activityId": "f69e0770-e0bb-11eb-bbed-5fb8923dc3e7"
                },
                "ffddbc40-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "activity": "commented",
                    "activityDate": 1625838362116,
                    "activityId": "ffddbc40-e0bb-11eb-bbed-5fb8923dc3e7"
                },
                "63142470-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "activity": "logged in",
                    "activityDate": 1625838528567,
                    "activityId": "63142470-e0bc-11eb-acf8-97f832451a98"
                },
                "6bb3a1a0-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625838543034,
                    "activityId": "6bb3a1a0-e0bc-11eb-acf8-97f832451a98"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
            "userProfileImage": "../"
        },
        "Ethan": {
            "userName": "Ethan",
            "emailAddress": "Ethan@email.com",
            "password": "somedia",
            "firstName": "Christian ",
            "lastName": "Cameron",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Smith"
                }
            ],
            "following": [],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Olive"
                }
            ],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/ethan-profilePix.jpg'),
                    "imageId": "c9db35d0-e0ae-11eb-90ca-19effd8b5a00"
                },
                {
                    "imageUrl": require('../assets/postImages/ethan-post.jpg'),
                    "imageId": "7c49a840-e0b0-11eb-90ca-19effd8b5a00"
                }
            ],
            "messages": {
                "Carter": {
                    "52ca18c0-e0b9-11eb-b036-69cc37af9c61": {
                        "userName": "Carter",
                        "messageId": "52ca18c0-e0b9-11eb-b036-69cc37af9c61",
                        "message": "hello,boss",
                        "messageDate": 1625837212748,
                        "messageStatus": "sent"
                    }
                }
            },
            "messageStatus": {
                "Carter": {
                    "friendMessaged": "Carter",
                    "userName": "Carter",
                    "messageOnScreen": false,
                    "messageViewStatus": "unRead",
                    "messageDate": 1625837212749,
                    "showMessage": true
                }
            },
            "notifications": {
                "2c082a50-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Ethan",
                    "notificationId": "2c082a50-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625418817909
                },
                "7f533ec0-e0b0-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ethan",
                    "notificationId": "7f533ec0-e0b0-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833421996
                },
                "6cc47990-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ethan",
                    "notificationId": "6cc47990-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835538345
                },
                "6cc4a0a0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ethan",
                    "notificationId": "6cc4a0a0-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835538346
                },
                "c6e1eed0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Ethan",
                    "notificationId": "c6e1eed0-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835689534
                },
                "adf6f7a0-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ethan",
                    "notificationId": "adf6f7a0-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836936218
                },
                "adf71eb0-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ethan",
                    "notificationId": "adf71eb0-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836936219
                },
                "25661230-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Ethan",
                    "notificationId": "25661230-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837136595
                },
                "52ca3fd0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Ethan",
                    "notificationId": "52ca3fd0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "message",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837212749
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "notificationId": "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837351228
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344194
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344195
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838362116
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb30560-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543030
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543033
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "9992ced0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337981
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "99931cf0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337983
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "bb25c750-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840394309
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceacfe0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397278
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceb1e00-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397280
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "cae26771-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840420711
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b53010-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430481
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b57e30-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430483
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "notificationId": "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840933636
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959241
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959242
                },
                "d0949470-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ethan",
                    "notificationId": "d0949470-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852026679
                },
                "d0949471-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ethan",
                    "notificationId": "d0949471-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852026679
                },
                "8348e980-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Ethan",
                    "notificationId": "8348e980-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852755992
                },
                "8486f670-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Ethan",
                    "notificationId": "8486f670-e19b-11eb-871f-0f966330432a",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934362455
                },
                "f59fd5a0-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ethan",
                    "notificationId": "f59fd5a0-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935411194
                },
                "f59fd5a1-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ethan",
                    "notificationId": "f59fd5a1-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935411194
                },
                "2079aee1-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ethan",
                    "notificationId": "2079aee1-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935483086
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "notificationId": "77d296c0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023676460
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693645
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693646
                },
                "c3d5b620-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Ethan",
                    "notificationId": "c3d5b620-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051291778
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "4eb37610-d9c9-11eb-ba8c-e9a262a433df": {
                    "userName": "Ethan",
                    "activity": "Created account",
                    "activityDate": 1625074419697,
                    "activityId": "4eb37610-d9c9-11eb-ba8c-e9a262a433df"
                },
                "e994cfe0-e0ad-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "activity": "logged in",
                    "activityDate": 1625832311774,
                    "activityId": "e994cfe0-e0ad-11eb-a170-d99d0616bfb4"
                },
                "f9941e50-e0ad-11eb-a170-d99d0616bfb4": {
                    "friendUserName": "Lily",
                    "userName": "Ethan",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625832338613,
                    "activityId": "f9941e50-e0ad-11eb-a170-d99d0616bfb4"
                },
                "041f65f0-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Logan",
                    "activity": "Friend request",
                    "activityDate": 1625832356303,
                    "activityId": "041f65f0-e0ae-11eb-a170-d99d0616bfb4"
                },
                "0b0154a1-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Liam",
                    "activity": "Friend request",
                    "activityDate": 1625832367850,
                    "activityId": "0b0154a1-e0ae-11eb-a170-d99d0616bfb4"
                },
                "0c150e91-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625832369657,
                    "activityId": "0c150e91-e0ae-11eb-a170-d99d0616bfb4"
                },
                "0f779a81-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Olive",
                    "activity": "Friend request",
                    "activityDate": 1625832375336,
                    "activityId": "0f779a81-e0ae-11eb-a170-d99d0616bfb4"
                },
                "7cc29e40-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625832988195,
                    "activityId": "7cc29e40-e0af-11eb-90ca-19effd8b5a00"
                },
                "8f0a7d20-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "activity": "commented",
                    "activityDate": 1625833018866,
                    "activityId": "8f0a7d20-e0af-11eb-90ca-19effd8b5a00"
                },
                "92948e42-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625833024804,
                    "activityId": "92948e42-e0af-11eb-90ca-19effd8b5a00"
                },
                "abf80971-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "activity": "commented",
                    "activityDate": 1625833067399,
                    "activityId": "abf80971-e0af-11eb-90ca-19effd8b5a00"
                },
                "f0656e90-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "activity": "likedComment",
                    "activityDate": 1625833182201,
                    "activityId": "f0656e90-e0af-11eb-90ca-19effd8b5a00"
                },
                "f11eac71-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625833183415,
                    "activityId": "f11eac71-e0af-11eb-90ca-19effd8b5a00"
                },
                "f40e7960-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625833188342,
                    "activityId": "f40e7960-e0af-11eb-90ca-19effd8b5a00"
                },
                "fa02d3c2-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "activity": "commented",
                    "activityDate": 1625833198332,
                    "activityId": "fa02d3c2-e0af-11eb-90ca-19effd8b5a00"
                },
                "00d5a740-e0b0-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "activity": "posted",
                    "activityDate": 1625833209780,
                    "activityId": "00d5a740-e0b0-11eb-90ca-19effd8b5a00"
                },
                "7f5365d0-e0b0-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625833421997,
                    "activityId": "7f5365d0-e0b0-11eb-90ca-19effd8b5a00"
                },
                "ff834130-e0b0-11eb-9f24-351dd7c3fe0f": {
                    "friendUserName": "Sophie",
                    "userName": "Ethan",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625833637059,
                    "activityId": "ff834130-e0b0-11eb-9f24-351dd7c3fe0f"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/ethan-profilePix.jpg')
        },
        "Josh": {
            "userName": "Josh",
            "emailAddress": "josh@email.com",
            "password": "somedia",
            "firstName": "Joseph",
            "lastName": "Roman",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Smith"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                    "videoId": "92a3b202-e337-11eb-97fc-8d90948c2e0c",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/josh-profilePix.jpg'),
                    "imageId": "3b557ba0-e332-11eb-97fc-8d90948c2e0c"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "2aae1890-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Josh",
                    "notificationId": "2aae1890-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625418815641
                },
                "c7f66c10-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Josh",
                    "notificationId": "c7f66c10-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835691345
                },
                "84a32250-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Josh",
                    "notificationId": "84a32250-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852758261
                },
                "85abee70-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Josh",
                    "notificationId": "85abee70-e19b-11eb-871f-0f966330432a",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934364375
                },
                "c30ff520-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Josh",
                    "notificationId": "c30ff520-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051290482
                },
                "ed70b640-e339-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Josh",
                    "notificationId": "ed70b640-e339-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626112350116
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "89048200-d9c9-11eb-ba8c-e9a262a433df": {
                    "userName": "Josh",
                    "activity": "Created account",
                    "activityDate": 1625074517536,
                    "activityId": "89048200-d9c9-11eb-ba8c-e9a262a433df"
                },
                "2b7267c0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "activity": "logged in",
                    "activityDate": 1626109018172,
                    "activityId": "2b7267c0-e332-11eb-97fc-8d90948c2e0c"
                },
                "45c991c2-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1626109062364,
                    "activityId": "45c991c2-e332-11eb-97fc-8d90948c2e0c"
                },
                "482c39e0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "commenterUserName": "Sebby",
                    "activity": "likedComment",
                    "activityDate": 1626109066366,
                    "activityId": "482c39e0-e332-11eb-97fc-8d90948c2e0c"
                },
                "4a22d9c1-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Smith",
                    "activity": "liked",
                    "activityDate": 1626109069660,
                    "activityId": "4a22d9c1-e332-11eb-97fc-8d90948c2e0c"
                },
                "4ee543d1-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Liam",
                    "commenterUserName": "Smith",
                    "activity": "likedComment",
                    "activityDate": 1626109077645,
                    "activityId": "4ee543d1-e332-11eb-97fc-8d90948c2e0c"
                },
                "4fb4efe1-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Liam",
                    "commenterUserName": "Sebby",
                    "activity": "likedComment",
                    "activityDate": 1626109079006,
                    "activityId": "4fb4efe1-e332-11eb-97fc-8d90948c2e0c"
                },
                "51b5a1e0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Olive",
                    "activity": "liked",
                    "activityDate": 1626109082366,
                    "activityId": "51b5a1e0-e332-11eb-97fc-8d90948c2e0c"
                },
                "535ca8e0-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "activity": "logged in",
                    "activityDate": 1626111232622,
                    "activityId": "535ca8e0-e337-11eb-97fc-8d90948c2e0c"
                },
                "562d5512-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Sebby",
                    "activity": "liked",
                    "activityDate": 1626111237345,
                    "activityId": "562d5512-e337-11eb-97fc-8d90948c2e0c"
                },
                "92a3d911-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "activity": "posted",
                    "activityDate": 1626111338785,
                    "activityId": "92a3d911-e337-11eb-97fc-8d90948c2e0c"
                },
                "ed70dd50-e339-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Josh",
                    "activity": "liked",
                    "activityDate": 1626112350117,
                    "activityId": "ed70dd50-e339-11eb-97fc-8d90948c2e0c"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "89045af0-d9c9-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/josh-profilePix.jpg')
        },
        "Liam": {
            "userName": "Liam",
            "emailAddress": "Liam@email.com",
            "password": "somedia",
            "firstName": "William",
            "lastName": "  Santiago ",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts":[],
            "followers": [
                {
                    "userName": "Chloe"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                    "videoId": "6ab065b0-e26d-11eb-af05-7d0898d50a19",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/olive-profilePix.jpg'),
                    "imageId": "7eb97200-e26c-11eb-af05-7d0898d50a19"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "0b0154a0-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Liam",
                    "notificationId": "0b0154a0-e0ae-11eb-a170-d99d0616bfb4",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832367850
                },
                "c8d70810-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Liam",
                    "notificationId": "c8d70810-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835692817
                },
                "58822940-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Liam",
                    "notificationId": "58822940-e0c0-11eb-8787-59040f6b2cc8",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840228820
                },
                "857b0bc0-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Liam",
                    "notificationId": "857b0bc0-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852759676
                },
                "937402e0-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Liam",
                    "notificationId": "937402e0-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852783118
                },
                "868e5f30-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Liam",
                    "notificationId": "868e5f30-e19b-11eb-871f-0f966330432a",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934365859
                },
                "768914e0-e26d-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Liam",
                    "notificationId": "768914e0-e26d-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626024533294
                },
                "0b8fe730-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Liam",
                    "notificationId": "0b8fe730-e2aa-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626050553123
                },
                "35057582-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Liam",
                    "commenterUserName": "Smith",
                    "notificationId": "35057582-e2aa-11eb-af05-7d0898d50a19",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626050622680
                },
                "aa591830-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Liam",
                    "notificationId": "aa591830-e2ac-11eb-ba6f-c5a311c90f7b",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051678515
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "4ee543d0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Liam",
                    "notificationId": "4ee543d0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109077645
                },
                "4ee543d2-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Liam",
                    "commenterUserName": "Smith",
                    "notificationId": "4ee543d2-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109077645
                },
                "4fb4efe2-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Liam",
                    "commenterUserName": "Sebby",
                    "notificationId": "4fb4efe2-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109079006
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "b305fca0-d9c9-11eb-ba8c-e9a262a433df": {
                    "userName": "Liam",
                    "activity": "Created account",
                    "activityDate": 1625074588010,
                    "activityId": "b305fca0-d9c9-11eb-ba8c-e9a262a433df"
                },
                "c5a5fd60-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "activity": "logged in",
                    "activityDate": 1626023807030,
                    "activityId": "c5a5fd60-e26b-11eb-af05-7d0898d50a19"
                },
                "d4537771-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Olive",
                    "activity": "liked",
                    "activityDate": 1626023831655,
                    "activityId": "d4537771-e26b-11eb-af05-7d0898d50a19"
                },
                "d91b5fc1-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Ada",
                    "commenterUserName": "Olive",
                    "activity": "likedComment",
                    "activityDate": 1626023839676,
                    "activityId": "d91b5fc1-e26b-11eb-af05-7d0898d50a19"
                },
                "db29a651-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "activity": "liked",
                    "activityDate": 1626023843125,
                    "activityId": "db29a651-e26b-11eb-af05-7d0898d50a19"
                },
                "dd495200-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Olive",
                    "activity": "likedComment",
                    "activityDate": 1626023846688,
                    "activityId": "dd495200-e26b-11eb-af05-7d0898d50a19"
                },
                "de8d1ca1-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Ada",
                    "activity": "likedComment",
                    "activityDate": 1626023848810,
                    "activityId": "de8d1ca1-e26b-11eb-af05-7d0898d50a19"
                },
                "e097e0c2-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Sophie",
                    "activity": "liked",
                    "activityDate": 1626023852236,
                    "activityId": "e097e0c2-e26b-11eb-af05-7d0898d50a19"
                },
                "6ab17720-e26d-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "activity": "posted",
                    "activityDate": 1626024513426,
                    "activityId": "6ab17720-e26d-11eb-af05-7d0898d50a19"
                },
                "76896300-e26d-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Liam",
                    "activity": "liked",
                    "activityDate": 1626024533296,
                    "activityId": "76896300-e26d-11eb-af05-7d0898d50a19"
                },
                "5f65d030-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Liam",
                    "activity": "logged in",
                    "activityDate": 1626109105331,
                    "activityId": "5f65d030-e332-11eb-97fc-8d90948c2e0c"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "b305d590-d9c9-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/liam-profilePix.jpg')
        },
        "Logan": {
            "userName": "Logan",
            "emailAddress": "logan@email.com",
            "password": "somedia",
            "firstName": "Everett ",
            "lastName": "Adams",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/logan-profilePix.jpg'),
                    "imageId": "82a2cf30-e332-11eb-97fc-8d90948c2e0c"
                },
                {
                    "imageUrl": require('../assets/postImages/logan-post1.jpeg'),
                    "imageId": "2a34e940-e333-11eb-97fc-8d90948c2e0c"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "041f3ee0-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Logan",
                    "notificationId": "041f3ee0-e0ae-11eb-a170-d99d0616bfb4",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832356302
                },
                "599ff550-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Logan",
                    "notificationId": "599ff550-e0c0-11eb-8787-59040f6b2cc8",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840230693
                },
                "951333f0-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Logan",
                    "notificationId": "951333f0-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852785839
                },
                "88263d40-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Logan",
                    "notificationId": "88263d40-e19b-11eb-871f-0f966330432a",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934368532
                },
                "89d48980-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Logan",
                    "notificationId": "89d48980-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934371352
                },
                "39791110-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Logan",
                    "notificationId": "39791110-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935525025
                },
                "cebdead0-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Logan",
                    "notificationId": "cebdead0-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051310078
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "e8ff9550-d9c9-11eb-ba8c-e9a262a433df": {
                    "userName": "Logan",
                    "activity": "Created account",
                    "activityDate": 1625074678565,
                    "activityId": "e8ff9550-d9c9-11eb-ba8c-e9a262a433df"
                },
                "6ef65740-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Logan",
                    "activity": "logged in",
                    "activityDate": 1626109131444,
                    "activityId": "6ef65740-e332-11eb-97fc-8d90948c2e0c"
                },
                "737db421-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Logan",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1626109139042,
                    "activityId": "737db421-e332-11eb-97fc-8d90948c2e0c"
                },
                "2a351051-e333-11eb-97fc-8d90948c2e0c": {
                    "userName": "Logan",
                    "activity": "posted",
                    "activityDate": 1626109445589,
                    "activityId": "2a351051-e333-11eb-97fc-8d90948c2e0c"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "e8ff6e40-d9c9-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/logan-profilePix.jpg')
        },
        "Olive": {
            "userName": "Olive",
            "emailAddress": "olive@email.com",
            "password": "somedia",
            "firstName": "Kayden",
            "lastName": "Parker ",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                }
            ],
            "following": [
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Logan"
                },
                {
                    "userName": "Ivy"
                }
            ],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Ethan"
                }
            ],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/olive-profilePix.jpg'),
                    "imageId": "cc6c3150-e1a8-11eb-be6f-ff4e5c960c6e"
                },
                {
                    "imageUrl":require('../assets/postImages/olive-post1.jpg'),
                    "imageId": "77d248a0-e26b-11eb-af05-7d0898d50a19"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "0f779a80-e0ae-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Olive",
                    "notificationId": "0f779a80-e0ae-11eb-a170-d99d0616bfb4",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625832375336
                },
                "96a6f350-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Olive",
                    "notificationId": "96a6f350-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852788485
                },
                "8ac02200-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Olive",
                    "notificationId": "8ac02200-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934372896
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693645
                },
                "d4535060-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Olive",
                    "notificationId": "d4535060-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023831654
                },
                "d4537770-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Olive",
                    "notificationId": "d4537770-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023831655
                },
                "6da57c00-e32c-11eb-a03f-b542039adbaa": {
                    "userName": "Sebby",
                    "posterUserName": "Olive",
                    "notificationId": "6da57c00-e32c-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626106552256
                },
                "6da5a310-e32c-11eb-a03f-b542039adbaa": {
                    "userName": "Sebby",
                    "posterUserName": "Olive",
                    "notificationId": "6da5a310-e32c-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626106552257
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                },
                "51b57ad0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Olive",
                    "notificationId": "51b57ad0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109082365
                },
                "51b57ad1-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Olive",
                    "notificationId": "51b57ad1-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109082365
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "198e7600-d9ca-11eb-ba8c-e9a262a433df": {
                    "userName": "Olive",
                    "activity": "Created account",
                    "activityDate": 1625074760032,
                    "activityId": "198e7600-d9ca-11eb-ba8c-e9a262a433df"
                },
                "0de50500-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "activity": "logged in",
                    "activityDate": 1625935022416,
                    "activityId": "0de50500-e19d-11eb-86e8-11fcf2392733"
                },
                "164ad490-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ada",
                    "activity": "liked",
                    "activityDate": 1625935036505,
                    "activityId": "164ad490-e19d-11eb-86e8-11fcf2392733"
                },
                "24ff0562-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "activity": "liked",
                    "activityDate": 1625935061174,
                    "activityId": "24ff0562-e19d-11eb-86e8-11fcf2392733"
                },
                "279e6860-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "activity": "liked",
                    "activityDate": 1625935065574,
                    "activityId": "279e6860-e19d-11eb-86e8-11fcf2392733"
                },
                "4f21eab1-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ada",
                    "activity": "commented",
                    "activityDate": 1625935131867,
                    "activityId": "4f21eab1-e19d-11eb-86e8-11fcf2392733"
                },
                "6d6d8060-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "activity": "commented",
                    "activityDate": 1625935182694,
                    "activityId": "6d6d8060-e19d-11eb-86e8-11fcf2392733"
                },
                "ec755681-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "activity": "liked",
                    "activityDate": 1625935395816,
                    "activityId": "ec755681-e19d-11eb-86e8-11fcf2392733"
                },
                "ef2d4a91-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625935400377,
                    "activityId": "ef2d4a91-e19d-11eb-86e8-11fcf2392733"
                },
                "f3557070-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ella",
                    "activity": "liked",
                    "activityDate": 1625935407351,
                    "activityId": "f3557070-e19d-11eb-86e8-11fcf2392733"
                },
                "f59fd5a2-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625935411194,
                    "activityId": "f59fd5a2-e19d-11eb-86e8-11fcf2392733"
                },
                "f75a56e1-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625935414094,
                    "activityId": "f75a56e1-e19d-11eb-86e8-11fcf2392733"
                },
                "f8dadc62-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625935416614,
                    "activityId": "f8dadc62-e19d-11eb-86e8-11fcf2392733"
                },
                "ff89d431-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Ada",
                    "activity": "likedComment",
                    "activityDate": 1625935427827,
                    "activityId": "ff89d431-e19d-11eb-86e8-11fcf2392733"
                },
                "01175201-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "commenterUserName": "Chloe",
                    "activity": "likedComment",
                    "activityDate": 1625935430432,
                    "activityId": "01175201-e19e-11eb-86e8-11fcf2392733"
                },
                "02d3cf10-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "commenterUserName": "Sophie",
                    "activity": "likedComment",
                    "activityDate": 1625935433345,
                    "activityId": "02d3cf10-e19e-11eb-86e8-11fcf2392733"
                },
                "1cd055f0-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Lily",
                    "userName": "Olive",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625935476943,
                    "activityId": "1cd055f0-e19e-11eb-86e8-11fcf2392733"
                },
                "1e297d50-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Ella",
                    "userName": "Olive",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625935479205,
                    "activityId": "1e297d50-e19e-11eb-86e8-11fcf2392733"
                },
                "1f360b50-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Sophie",
                    "userName": "Olive",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625935480965,
                    "activityId": "1f360b50-e19e-11eb-86e8-11fcf2392733"
                },
                "2079aee0-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Ethan",
                    "userName": "Olive",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625935483086,
                    "activityId": "2079aee0-e19e-11eb-86e8-11fcf2392733"
                },
                "22149a31-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "chigo",
                    "activity": "Friend request",
                    "activityDate": 1625935485779,
                    "activityId": "22149a31-e19e-11eb-86e8-11fcf2392733"
                },
                "239c2491-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Ruby",
                    "userName": "Olive",
                    "activity": "followed",
                    "activityDate": 1625935488345,
                    "activityId": "239c2491-e19e-11eb-86e8-11fcf2392733"
                },
                "2bcc1711-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Sebby",
                    "activity": "Friend request",
                    "activityDate": 1625935502081,
                    "activityId": "2bcc1711-e19e-11eb-86e8-11fcf2392733"
                },
                "2cf024b1-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ada",
                    "activity": "Friend request",
                    "activityDate": 1625935503995,
                    "activityId": "2cf024b1-e19e-11eb-86e8-11fcf2392733"
                },
                "2ea500a1-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Nova",
                    "activity": "Friend request",
                    "activityDate": 1625935506858,
                    "activityId": "2ea500a1-e19e-11eb-86e8-11fcf2392733"
                },
                "32965f11-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ivy",
                    "activity": "Friend request",
                    "activityDate": 1625935513473,
                    "activityId": "32965f11-e19e-11eb-86e8-11fcf2392733"
                },
                "35095ae1-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Mia",
                    "activity": "Friend request",
                    "activityDate": 1625935517582,
                    "activityId": "35095ae1-e19e-11eb-86e8-11fcf2392733"
                },
                "370ad031-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Ada",
                    "userName": "Olive",
                    "activity": "followed",
                    "activityDate": 1625935520947,
                    "activityId": "370ad031-e19e-11eb-86e8-11fcf2392733"
                },
                "3832fc81-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Chloe",
                    "userName": "Olive",
                    "activity": "followed",
                    "activityDate": 1625935522888,
                    "activityId": "3832fc81-e19e-11eb-86e8-11fcf2392733"
                },
                "39791111-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Logan",
                    "userName": "Olive",
                    "activity": "followed",
                    "activityDate": 1625935525025,
                    "activityId": "39791111-e19e-11eb-86e8-11fcf2392733"
                },
                "3b5d3a60-e19e-11eb-86e8-11fcf2392733": {
                    "friendUserName": "Ivy",
                    "userName": "Olive",
                    "activity": "followed",
                    "activityDate": 1625935528198,
                    "activityId": "3b5d3a60-e19e-11eb-86e8-11fcf2392733"
                },
                "77d7edf0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "activity": "posted",
                    "activityDate": 1626023676495,
                    "activityId": "77d7edf0-e26b-11eb-af05-7d0898d50a19"
                },
                "8210f6e1-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "activity": "liked",
                    "activityDate": 1626023693646,
                    "activityId": "8210f6e1-e26b-11eb-af05-7d0898d50a19"
                },
                "ace551e0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "friendUserName": "Ava",
                    "activity": "Friend request",
                    "activityDate": 1626023765502,
                    "activityId": "ace551e0-e26b-11eb-af05-7d0898d50a19"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/olive-profilePix.jpg')
        },
        "Sebby": {
            "userName": "Sebby",
            "emailAddress": "Sebby@email.com",
            "password": "somedia",
            "firstName": "Sebastian",
            "lastName": "Jackson",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Ada"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                    "videoId": "29169610-e335-11eb-97fc-8d90948c2e0c",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/sebby-profilePix.jpg'),
                    "imageId": "a1aacdf0-e2ac-11eb-ba6f-c5a311c90f7b"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "5aac8350-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Sebby",
                    "notificationId": "5aac8350-e0c0-11eb-8787-59040f6b2cc8",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840232453
                },
                "8b83c020-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Sebby",
                    "notificationId": "8b83c020-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934374178
                },
                "2bcc1710-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Sebby",
                    "notificationId": "2bcc1710-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935502081
                },
                "42dc4390-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Sebby",
                    "notificationId": "42dc4390-e337-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626111204937
                },
                "562d5510-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Sebby",
                    "notificationId": "562d5510-e337-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626111237345
                },
                "562d5511-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Sebby",
                    "notificationId": "562d5511-e337-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626111237345
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "5cba3360-d9ca-11eb-ba8c-e9a262a433df": {
                    "userName": "Sebby",
                    "activity": "Created account",
                    "activityDate": 1625074872726,
                    "activityId": "5cba3360-d9ca-11eb-ba8c-e9a262a433df"
                },
                "593c04d0-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "activity": "logged in",
                    "activityDate": 1626051542429,
                    "activityId": "593c04d0-e2ac-11eb-ba6f-c5a311c90f7b"
                },
                "a880d5c1-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Smith",
                    "activity": "liked",
                    "activityDate": 1626051675420,
                    "activityId": "a880d5c1-e2ac-11eb-ba6f-c5a311c90f7b"
                },
                "aa593f41-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Liam",
                    "activity": "liked",
                    "activityDate": 1626051678516,
                    "activityId": "aa593f41-e2ac-11eb-ba6f-c5a311c90f7b"
                },
                "ac682211-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Ada",
                    "activity": "liked",
                    "activityDate": 1626051681969,
                    "activityId": "ac682211-e2ac-11eb-ba6f-c5a311c90f7b"
                },
                "6da5ca20-e32c-11eb-a03f-b542039adbaa": {
                    "userName": "Sebby",
                    "posterUserName": "Olive",
                    "activity": "liked",
                    "activityDate": 1626106552258,
                    "activityId": "6da5ca20-e32c-11eb-a03f-b542039adbaa"
                },
                "8a283891-e32c-11eb-a03f-b542039adbaa": {
                    "userName": "Sebby",
                    "posterUserName": "Liam",
                    "activity": "commented",
                    "activityDate": 1626106600089,
                    "activityId": "8a283891-e32c-11eb-a03f-b542039adbaa"
                },
                "131f5d10-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "activity": "logged in",
                    "activityDate": 1626108118369,
                    "activityId": "131f5d10-e330-11eb-97fc-8d90948c2e0c"
                },
                "1a466b10-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1626108130369,
                    "activityId": "1a466b10-e330-11eb-97fc-8d90948c2e0c"
                },
                "3d058780-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Lily",
                    "activity": "commented",
                    "activityDate": 1626108188664,
                    "activityId": "3d058780-e330-11eb-97fc-8d90948c2e0c"
                },
                "11ccb370-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "activity": "logged in",
                    "activityDate": 1626108975143,
                    "activityId": "11ccb370-e332-11eb-97fc-8d90948c2e0c"
                },
                "e00f2be0-e333-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "activity": "logged in",
                    "activityDate": 1626109750686,
                    "activityId": "e00f2be0-e333-11eb-97fc-8d90948c2e0c"
                },
                "2916bd21-e335-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "activity": "posted",
                    "activityDate": 1626110302706,
                    "activityId": "2916bd21-e335-11eb-97fc-8d90948c2e0c"
                },
                "42dc4392-e337-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Sebby",
                    "activity": "liked",
                    "activityDate": 1626111204937,
                    "activityId": "42dc4392-e337-11eb-97fc-8d90948c2e0c"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/sebby-profilePix.jpg')
        },
        "Smith": {
            "userName": "Smith",
            "emailAddress": "smith@email.com",
            "password": "somedia",
            "firstName": "Kevin ",
            "lastName": "Cane",
            "gender": "Male",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Ada"
                }
            ],
            "following": [
                {
                    "userName": "Josh"
                },
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "chinedu"
                }
            ],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Ava"
                },
                {
                    "userName": "Ella"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                    "videoId": "8eb16ed0-e2ab-11eb-8a39-b39ebfa4685e",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/smith-profilePix.jpg'),
                    "imageId": "2c426200-e26e-11eb-af05-7d0898d50a19"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "23a08600-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Smith",
                    "notificationId": "23a08600-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625418803808
                },
                "a0c687d0-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Smith",
                    "notificationId": "a0c687d0-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625819734221
                },
                "8cbeff40-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Smith",
                    "notificationId": "8cbeff40-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934376244
                },
                "b48cbf60-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "posterUserName": "Smith",
                    "notificationId": "b48cbf60-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051266134
                },
                "a880aeb0-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Smith",
                    "notificationId": "a880aeb0-e2ac-11eb-ba6f-c5a311c90f7b",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051675420
                },
                "a880d5c0-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Smith",
                    "notificationId": "a880d5c0-e2ac-11eb-ba6f-c5a311c90f7b",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051675420
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                },
                "4a22b2b0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Smith",
                    "notificationId": "4a22b2b0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109069659
                },
                "4a22d9c0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Smith",
                    "notificationId": "4a22d9c0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109069660
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "b5061cf1-d9ca-11eb-ba8c-e9a262a433df": {
                    "userName": "Smith",
                    "activity": "Created account",
                    "activityDate": 1625075020863,
                    "activityId": "b5061cf1-d9ca-11eb-ba8c-e9a262a433df"
                },
                "0dc9c8e0-e26e-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "activity": "logged in",
                    "activityDate": 1626024787054,
                    "activityId": "0dc9c8e0-e26e-11eb-af05-7d0898d50a19"
                },
                "0b900e41-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Liam",
                    "activity": "liked",
                    "activityDate": 1626050553124,
                    "activityId": "0b900e41-e2aa-11eb-af05-7d0898d50a19"
                },
                "33a2b130-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Liam",
                    "activity": "commented",
                    "activityDate": 1626050620355,
                    "activityId": "33a2b130-e2aa-11eb-af05-7d0898d50a19"
                },
                "35057581-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Liam",
                    "commenterUserName": "Smith",
                    "activity": "likedComment",
                    "activityDate": 1626050622680,
                    "activityId": "35057581-e2aa-11eb-af05-7d0898d50a19"
                },
                "39ba7210-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Ada",
                    "activity": "liked",
                    "activityDate": 1626050630577,
                    "activityId": "39ba7210-e2aa-11eb-af05-7d0898d50a19"
                },
                "8eb1bcf0-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "activity": "posted",
                    "activityDate": 1626051202623,
                    "activityId": "8eb1bcf0-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "b48ce670-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "posterUserName": "Smith",
                    "activity": "liked",
                    "activityDate": 1626051266135,
                    "activityId": "b48ce670-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "be44ff90-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Lily",
                    "userName": "Smith",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1626051282441,
                    "activityId": "be44ff90-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "bfd9f770-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Sophie",
                    "userName": "Smith",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1626051285095,
                    "activityId": "bfd9f770-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "c30ff521-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Josh",
                    "userName": "Smith",
                    "activity": "followed",
                    "activityDate": 1626051290482,
                    "activityId": "c30ff521-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "c3d5dd30-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Ethan",
                    "userName": "Smith",
                    "activity": "followed",
                    "activityDate": 1626051291779,
                    "activityId": "c3d5dd30-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "c50c8871-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "chinedu",
                    "userName": "Smith",
                    "activity": "followed",
                    "activityDate": 1626051293815,
                    "activityId": "c50c8871-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "c66c1871-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "james",
                    "userName": "Smith",
                    "activity": "followed",
                    "activityDate": 1626051296119,
                    "activityId": "c66c1871-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "c7f04771-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "james",
                    "activity": "Friend request",
                    "activityDate": 1626051298663,
                    "activityId": "c7f04771-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "cebe11e0-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Logan",
                    "activity": "Friend request",
                    "activityDate": 1626051310078,
                    "activityId": "cebe11e0-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "d3d72771-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1626051318631,
                    "activityId": "d3d72771-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "d4e7d421-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Ruby",
                    "activity": "Friend request",
                    "activityDate": 1626051320418,
                    "activityId": "d4e7d421-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "d7e29d90-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Ava",
                    "userName": "Smith",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1626051325417,
                    "activityId": "d7e29d90-e2ab-11eb-8a39-b39ebfa4685e"
                },
                "d9726550-e2ab-11eb-8a39-b39ebfa4685e": {
                    "friendUserName": "Ella",
                    "userName": "Smith",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1626051328037,
                    "activityId": "d9726550-e2ab-11eb-8a39-b39ebfa4685e"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/smith-profilePix.jpg')
        },
        "Ada": {
            "userName": "Ada",
            "emailAddress": "ada@email.com",
            "password": "somedia",
            "firstName": "Adanna",
            "lastName": "Chukwu",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Olive"
                }
            ],
            "following": [
                {
                    "userName": "Logan"
                },
                {
                    "userName": "Olive"
                },
                {
                    "userName": "Sebby"
                },
                {
                    "userName": "Smith"
                },
                {
                    "userName": "Mia"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Nova"
                },
                {
                    "userName": "Ivy"
                }
            ],
            "friends": [
                {
                    "userName": "Ava"
                },
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Ella"
                }
            ],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/ada-profilepix.jpg'),
                    "imageId": "09f996d0-e199-11eb-871f-0f966330432a"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/d4a8759e-9e59-4a86-be7a-cb59f4ad2b8a",
                    "imageId": "26796d30-e199-11eb-871f-0f966330432a"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/4abdfd4d-f93d-4c8e-9d00-39c678fd5d45",
                    "imageId": "414f1600-e199-11eb-871f-0f966330432a"
                },
                {
                    "imageUrl": require('../assets/postImages/ada-post1.jpeg'),
                    "imageId": "02ee7fd0-e19a-11eb-871f-0f966330432a"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "a2ceb3e0-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Ada",
                    "notificationId": "a2ceb3e0-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625819737630
                },
                "63bccc30-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Ada",
                    "notificationId": "63bccc30-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934307443
                },
                "164a8670-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ada",
                    "notificationId": "164a8670-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935036504
                },
                "164aad80-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ada",
                    "notificationId": "164aad80-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935036505
                },
                "2cf024b0-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ada",
                    "notificationId": "2cf024b0-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935503995
                },
                "370ad030-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ada",
                    "notificationId": "370ad030-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935520947
                },
                "d91b5fc0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Ada",
                    "notificationId": "d91b5fc0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023839676
                },
                "d91b86d0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Ada",
                    "commenterUserName": "Olive",
                    "notificationId": "d91b86d0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023839677
                },
                "39ba4b00-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Ada",
                    "notificationId": "39ba4b00-e2aa-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626050630576
                },
                "39ba4b01-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "posterUserName": "Ada",
                    "notificationId": "39ba4b01-e2aa-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626050630576
                },
                "ac67fb00-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Ada",
                    "notificationId": "ac67fb00-e2ac-11eb-ba6f-c5a311c90f7b",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051681968
                },
                "ac682210-e2ac-11eb-ba6f-c5a311c90f7b": {
                    "userName": "Sebby",
                    "posterUserName": "Ada",
                    "notificationId": "ac682210-e2ac-11eb-ba6f-c5a311c90f7b",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051681969
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "a289f230-d9cb-11eb-ba8c-e9a262a433df": {
                    "userName": "Ada",
                    "activity": "Created account",
                    "activityDate": 1625075419347,
                    "activityId": "a289f230-d9cb-11eb-ba8c-e9a262a433df"
                },
                "f815aa50-d9cb-11eb-ba8c-e9a262a433df": {
                    "userName": "Ada",
                    "activity": "logged in",
                    "activityDate": 1625075562869,
                    "activityId": "f815aa50-d9cb-11eb-ba8c-e9a262a433df"
                },
                "5438a891-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Chloe",
                    "activity": "liked",
                    "activityDate": 1625932992921,
                    "activityId": "5438a891-e198-11eb-871f-0f966330432a"
                },
                "6b27ef70-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Chloe",
                    "activity": "commented",
                    "activityDate": 1625933031399,
                    "activityId": "6b27ef70-e198-11eb-871f-0f966330432a"
                },
                "9220bdf1-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "activity": "commented",
                    "activityDate": 1625933096783,
                    "activityId": "9220bdf1-e198-11eb-871f-0f966330432a"
                },
                "02ee7fd2-e19a-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "activity": "posted",
                    "activityDate": 1625933715533,
                    "activityId": "02ee7fd2-e19a-11eb-871f-0f966330432a"
                },
                "63bcf341-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Ada",
                    "activity": "liked",
                    "activityDate": 1625934307444,
                    "activityId": "63bcf341-e19b-11eb-871f-0f966330432a"
                },
                "6910a0d2-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "activity": "liked",
                    "activityDate": 1625934316381,
                    "activityId": "6910a0d2-e19b-11eb-871f-0f966330432a"
                },
                "6af69ee0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "commenterUserName": "Chloe",
                    "activity": "likedComment",
                    "activityDate": 1625934319566,
                    "activityId": "6af69ee0-e19b-11eb-871f-0f966330432a"
                },
                "6e2c4e72-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Ruby",
                    "activity": "liked",
                    "activityDate": 1625934324951,
                    "activityId": "6e2c4e72-e19b-11eb-871f-0f966330432a"
                },
                "755afd90-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Ava",
                    "userName": "Ada",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625934337001,
                    "activityId": "755afd90-e19b-11eb-871f-0f966330432a"
                },
                "7ce89590-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Lily",
                    "userName": "Ada",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625934349673,
                    "activityId": "7ce89590-e19b-11eb-871f-0f966330432a"
                },
                "7d642e30-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Sophie",
                    "userName": "Ada",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625934350483,
                    "activityId": "7d642e30-e19b-11eb-871f-0f966330432a"
                },
                "80065050-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Ella",
                    "userName": "Ada",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625934354901,
                    "activityId": "80065050-e19b-11eb-871f-0f966330432a"
                },
                "83bc7a81-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625934361128,
                    "activityId": "83bc7a81-e19b-11eb-871f-0f966330432a"
                },
                "8486f671-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Ethan",
                    "activity": "Friend request",
                    "activityDate": 1625934362455,
                    "activityId": "8486f671-e19b-11eb-871f-0f966330432a"
                },
                "85abee71-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Josh",
                    "activity": "Friend request",
                    "activityDate": 1625934364375,
                    "activityId": "85abee71-e19b-11eb-871f-0f966330432a"
                },
                "868e8640-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Liam",
                    "activity": "Friend request",
                    "activityDate": 1625934365860,
                    "activityId": "868e8640-e19b-11eb-871f-0f966330432a"
                },
                "88266450-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Logan",
                    "activity": "Friend request",
                    "activityDate": 1625934368533,
                    "activityId": "88266450-e19b-11eb-871f-0f966330432a"
                },
                "89d48981-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Logan",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934371352,
                    "activityId": "89d48981-e19b-11eb-871f-0f966330432a"
                },
                "8ac02201-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Olive",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934372896,
                    "activityId": "8ac02201-e19b-11eb-871f-0f966330432a"
                },
                "8b83c021-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Sebby",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934374178,
                    "activityId": "8b83c021-e19b-11eb-871f-0f966330432a"
                },
                "8cbeff41-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Smith",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934376244,
                    "activityId": "8cbeff41-e19b-11eb-871f-0f966330432a"
                },
                "8d97fa21-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Mia",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934377666,
                    "activityId": "8d97fa21-e19b-11eb-871f-0f966330432a"
                },
                "8ee93241-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Chloe",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934379876,
                    "activityId": "8ee93241-e19b-11eb-871f-0f966330432a"
                },
                "9044caa1-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Nova",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934382154,
                    "activityId": "9044caa1-e19b-11eb-871f-0f966330432a"
                },
                "917b4ed1-e19b-11eb-871f-0f966330432a": {
                    "friendUserName": "Ivy",
                    "userName": "Ada",
                    "activity": "followed",
                    "activityDate": 1625934384189,
                    "activityId": "917b4ed1-e19b-11eb-871f-0f966330432a"
                }
            },
            "userCoverImage": "blob:http://localhost:8080/4abdfd4d-f93d-4c8e-9d00-39c678fd5d45",
            "userId": "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
            "userProfileImage": require('../assets/postImages/ada-profilepix.jpg')
        },
        "Mia": {
            "userName": "Mia",
            "emailAddress": "",
            "password": "somedia",
            "firstName": "Mary",
            "lastName": "George",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Ada"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/mia-profilePix.jpg'),
                    "imageId": "2212b180-df45-11eb-a210-09083f776f3d"
                },
                {
                    "imageUrl": require('../assets/postImages/mia-post1.jpeg'),
                    "imageId": "d9341a22-df45-11eb-a210-09083f776f3d"
                }
            ],
            "messages": {
                "Carter": {
                    "34ff7430-df4b-11eb-836f-59a9e97a569e": {
                        "userName": "Mia",
                        "messageId": "34ff7430-df4b-11eb-836f-59a9e97a569e",
                        "message": "hi",
                        "messageDate": 1625679966963,
                        "messageStatus": "Read"
                    },
                    "47573040-e0b9-11eb-b036-69cc37af9c61": {
                        "userName": "Carter",
                        "messageId": "47573040-e0b9-11eb-b036-69cc37af9c61",
                        "message": "hello how are doing",
                        "messageDate": 1625837193540,
                        "messageStatus": "sent"
                    }
                },
                "Ava": {
                    "57cebd40-df4b-11eb-961c-b7b5c586ebc2": {
                        "userName": "Mia",
                        "messageId": "57cebd40-df4b-11eb-961c-b7b5c586ebc2",
                        "message": "hello",
                        "messageDate": 1625680025364,
                        "messageStatus": "Read"
                    },
                    "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2": {
                        "userName": "Ava",
                        "messageId": "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2",
                        "message": "hi ,how are you",
                        "messageDate": 1625680249197,
                        "messageStatus": "sent"
                    }
                }
            },
            "messageStatus": {
                "Carter": {
                    "friendMessaged": "Carter",
                    "userName": "Carter",
                    "messageOnScreen": false,
                    "messageViewStatus": "unRead",
                    "messageDate": 1625837193540,
                    "showMessage": true
                },
                "Ava": {
                    "friendMessaged": "Ava",
                    "userName": "Ava",
                    "messageOnScreen": false,
                    "messageViewStatus": "unRead",
                    "messageDate": 1625680249198,
                    "showMessage": true
                }
            },
            "notifications": {
                "dd176ed0-df45-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Mia",
                    "notificationId": "dd176ed0-df45-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625677671997
                },
                "a6b0adb0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "posterUserName": "Mia",
                    "notificationId": "a6b0adb0-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625680157707
                },
                "a6b0d4c0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "posterUserName": "Mia",
                    "notificationId": "a6b0d4c0-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625680157708
                },
                "dd3918e0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "friendUserName": "Mia",
                    "notificationId": "dd3918e0-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "message",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625680249198
                },
                "7b59db90-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Mia",
                    "notificationId": "7b59db90-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800773577
                },
                "7b59db91-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Mia",
                    "notificationId": "7b59db91-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800773577
                },
                "92948e40-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "notificationId": "92948e40-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833024804
                },
                "92948e41-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "notificationId": "92948e41-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833024804
                },
                "6fcbed30-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Mia",
                    "notificationId": "6fcbed30-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835543428
                },
                "6fcc1440-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Mia",
                    "notificationId": "6fcc1440-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835543428
                },
                "47575750-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Mia",
                    "notificationId": "47575750-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "message",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837193541
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "d4875270-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Mia",
                    "notificationId": "d4875270-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852033303
                },
                "d4875271-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Mia",
                    "notificationId": "d4875271-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852033303
                },
                "8d97fa20-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Mia",
                    "notificationId": "8d97fa20-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934377666
                },
                "f8dadc60-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Mia",
                    "notificationId": "f8dadc60-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935416614
                },
                "f8dadc61-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Mia",
                    "notificationId": "f8dadc61-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935416614
                },
                "35095ae0-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Mia",
                    "notificationId": "35095ae0-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935517582
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "5afcd530-db39-11eb-af32-47b0df65ae76": {
                    "userName": "Mia",
                    "activity": "Created account",
                    "activityDate": 1625232495107,
                    "activityId": "5afcd530-db39-11eb-af32-47b0df65ae76"
                },
                "1aaf6fc0-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "activity": "logged in",
                    "activityDate": 1625676486844,
                    "activityId": "1aaf6fc0-df43-11eb-a210-09083f776f3d"
                },
                "22772a90-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625676499897,
                    "activityId": "22772a90-df43-11eb-a210-09083f776f3d"
                },
                "24f63451-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625676504085,
                    "activityId": "24f63451-df43-11eb-a210-09083f776f3d"
                },
                "264ee682-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625676506344,
                    "activityId": "264ee682-df43-11eb-a210-09083f776f3d"
                },
                "332110e2-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Lily",
                    "activity": "commented",
                    "activityDate": 1625676527854,
                    "activityId": "332110e2-df43-11eb-a210-09083f776f3d"
                },
                "58c94382-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Carter",
                    "activity": "commented",
                    "activityDate": 1625676591032,
                    "activityId": "58c94382-df43-11eb-a210-09083f776f3d"
                },
                "d9344131-df45-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "activity": "posted",
                    "activityDate": 1625677665475,
                    "activityId": "d9344131-df45-11eb-a210-09083f776f3d"
                },
                "dd176ed2-df45-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625677671997,
                    "activityId": "dd176ed2-df45-11eb-a210-09083f776f3d"
                },
                "73f947b0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "commenterUserName": "Carter",
                    "activity": "likedComment",
                    "activityDate": 1625680072619,
                    "activityId": "73f947b0-df4b-11eb-961c-b7b5c586ebc2"
                },
                "85737652-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "activity": "commented",
                    "activityDate": 1625680101941,
                    "activityId": "85737652-df4b-11eb-961c-b7b5c586ebc2"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "5afc8710-db39-11eb-af32-47b0df65ae76",
            "userProfileImage": require('../assets/postImages/mia-profilePix.jpg')
        },
        "Ava": {
            "userName": "Ava",
            "emailAddress": "Ava@email.com",
            "password": "somedia",
            "firstName": "Charlotte",
            "lastName": "Glenn",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Smith"
                }
            ],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/ava-profilepix.jpg'),
                    "imageId": "802c9680-e0aa-11eb-bcb8-25b2107d0c08"
                },
                {
                    "imageUrl": require('../assets/postImages/ava-post1.jpg'),
                    "imageId": "4f386ee0-e0ab-11eb-bcb8-25b2107d0c08"
                }
            ],
            "messages": {
                "Mia": {
                    "57cebd40-df4b-11eb-961c-b7b5c586ebc2": {
                        "userName": "Mia",
                        "messageId": "57cebd40-df4b-11eb-961c-b7b5c586ebc2",
                        "message": "hello",
                        "messageDate": 1625680025364,
                        "messageStatus": "Read"
                    },
                    "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2": {
                        "userName": "Ava",
                        "messageId": "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2",
                        "message": "hi ,how are you",
                        "messageDate": 1625680249197,
                        "messageStatus": "sent"
                    }
                }
            },
            "messageStatus": {
                "Mia": {
                    "friendMessaged": "Mia",
                    "userName": "Ava",
                    "messageOnScreen": "off",
                    "messageViewStatus": "Read",
                    "messageDate": 1625831254277,
                    "showMessage": true
                }
            },
            "notifications": {
                "57cee450-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "friendUserName": "Ava",
                    "notificationId": "57cee450-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "message",
                    "notificationStatus": "Read",
                    "notificationDate": 1625680025365
                },
                "770e7240-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Sophie",
                    "friendUserName": "Ava",
                    "notificationId": "770e7240-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625819664228
                },
                "53730b50-e0ab-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "posterUserName": "Ava",
                    "notificationId": "53730b50-e0ab-11eb-bcb8-25b2107d0c08",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625831200901
                },
                "7cc22910-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "notificationId": "7cc22910-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832988194
                },
                "7cc27730-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "notificationId": "7cc27730-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832988195
                },
                "6e069680-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ava",
                    "notificationId": "6e069680-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835540456
                },
                "6e069681-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ava",
                    "notificationId": "6e069681-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835540456
                },
                "27472e40-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Ava",
                    "notificationId": "27472e40-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837139748
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "notificationId": "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837351228
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344194
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344195
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838362116
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb30560-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543030
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543033
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b53010-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430481
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b57e30-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430483
                },
                "d2fda530-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ava",
                    "notificationId": "d2fda530-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852030723
                },
                "d2fda531-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ava",
                    "notificationId": "d2fda531-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852030723
                },
                "755b4bb0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Ava",
                    "notificationId": "755b4bb0-e19b-11eb-871f-0f966330432a",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934337003
                },
                "f75a2fd0-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ava",
                    "notificationId": "f75a2fd0-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935414093
                },
                "f75a56e0-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ava",
                    "notificationId": "f75a56e0-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935414094
                },
                "ace52ad0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "friendUserName": "Ava",
                    "notificationId": "ace52ad0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023765501
                },
                "d7e29d91-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Ava",
                    "notificationId": "d7e29d91-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051325417
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "839d3930-db39-11eb-af32-47b0df65ae76": {
                    "userName": "Ava",
                    "activity": "Created account",
                    "activityDate": 1625232563267,
                    "activityId": "839d3930-db39-11eb-af32-47b0df65ae76"
                },
                "a0e0f250-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "activity": "logged in",
                    "activityDate": 1625680147957,
                    "activityId": "a0e0f250-df4b-11eb-961c-b7b5c586ebc2"
                },
                "a6b0d4c1-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625680157708,
                    "activityId": "a6b0d4c1-df4b-11eb-961c-b7b5c586ebc2"
                },
                "cbe58510-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "posterUserName": "Mia",
                    "activity": "commented",
                    "activityDate": 1625680220129,
                    "activityId": "cbe58510-df4b-11eb-961c-b7b5c586ebc2"
                },
                "9f397f30-e090-11eb-bcb8-25b2107d0c08": {
                    "friendUserName": "Lily",
                    "userName": "Ava",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625819731619,
                    "activityId": "9f397f30-e090-11eb-bcb8-25b2107d0c08"
                },
                "a0c687d1-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Smith",
                    "activity": "Friend request",
                    "activityDate": 1625819734221,
                    "activityId": "a0c687d1-e090-11eb-bcb8-25b2107d0c08"
                },
                "a2cedaf0-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Ada",
                    "activity": "Friend request",
                    "activityDate": 1625819737631,
                    "activityId": "a2cedaf0-e090-11eb-bcb8-25b2107d0c08"
                },
                "a65f0691-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625819743609,
                    "activityId": "a65f0691-e090-11eb-bcb8-25b2107d0c08"
                },
                "4f38e410-e0ab-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "activity": "posted",
                    "activityDate": 1625831193809,
                    "activityId": "4f38e410-e0ab-11eb-bcb8-25b2107d0c08"
                },
                "53733261-e0ab-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625831200902,
                    "activityId": "53733261-e0ab-11eb-bcb8-25b2107d0c08"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "839d1220-db39-11eb-af32-47b0df65ae76",
            "userProfileImage": require('../assets/postImages/ava-profilepix.jpg')
        },
        "Ella": {
            "userName": "Ella",
            "emailAddress": "Ella@email.com",
            "password": "somedia",
            "firstName": "Ella",
            "lastName": "Kendrick",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                },
                {
                    "userName": "Smith"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "blob:http://localhost:8080/ae0d9e7a-8f01-4ab1-92e1-06c143e2af44",
                    "videoId": "0f0779f0-e0b6-11eb-bb52-d5cdf6bb26a5",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/ella-profilepix.jpg'),
                    "imageId": "a2a72ee0-e0b5-11eb-b9c1-cfb72beca659"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "59029d80-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Ella",
                    "posterUserName": "Ella",
                    "notificationId": "59029d80-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836793688
                },
                "83866780-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ella",
                    "notificationId": "83866780-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836865016
                },
                "83868e90-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "posterUserName": "Ella",
                    "notificationId": "83868e90-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836865017
                },
                "28207741-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Ella",
                    "notificationId": "28207741-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837141172
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "notificationId": "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837351228
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344194
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344195
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838362116
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb30560-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543030
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543033
                },
                "1f7f2880-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Ella",
                    "notificationId": "1f7f2880-e0bd-11eb-8787-59040f6b2cc8",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838844680
                },
                "1f7f2881-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Ella",
                    "notificationId": "1f7f2881-e0bd-11eb-8787-59040f6b2cc8",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838844680
                },
                "4f2a5891-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Ella",
                    "notificationId": "4f2a5891-e0c0-11eb-8787-59040f6b2cc8",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840213145
                },
                "ccfc0460-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ella",
                    "notificationId": "ccfc0460-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852020646
                },
                "ccfc0461-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ella",
                    "notificationId": "ccfc0461-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852020646
                },
                "7cd721c1-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Ella",
                    "notificationId": "7cd721c1-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852745180
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f4095a60-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945158
                },
                "f409f6a0-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f409f6a0-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945162
                },
                "06f9fc60-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "06f9fc60-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852976934
                },
                "088a3950-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "088a3950-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852979557
                },
                "0fb0f930-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "0fb0f930-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852991555
                },
                "0fb12040-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "0fb12040-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852991556
                },
                "80065051-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Ella",
                    "notificationId": "80065051-e19b-11eb-871f-0f966330432a",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934354901
                },
                "f3554960-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ella",
                    "notificationId": "f3554960-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935407350
                },
                "f3554961-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ella",
                    "notificationId": "f3554961-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935407350
                },
                "1e29a460-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ella",
                    "notificationId": "1e29a460-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935479206
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "notificationId": "77d296c0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023676460
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693645
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693646
                },
                "d9726551-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Ella",
                    "notificationId": "d9726551-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051328037
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "a7f60870-db39-11eb-af32-47b0df65ae76": {
                    "userName": "Ella",
                    "activity": "Created account",
                    "activityDate": 1625232624247,
                    "activityId": "a7f60870-db39-11eb-af32-47b0df65ae76"
                },
                "69766000-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "activity": "logged in",
                    "activityDate": 1625835532800,
                    "activityId": "69766000-e0b5-11eb-b9c1-cfb72beca659"
                },
                "6cc4a0a1-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625835538346,
                    "activityId": "6cc4a0a1-e0b5-11eb-b9c1-cfb72beca659"
                },
                "6e069682-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625835540456,
                    "activityId": "6e069682-e0b5-11eb-b9c1-cfb72beca659"
                },
                "6fcc1441-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625835543428,
                    "activityId": "6fcc1441-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c0a4f2b0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "uche",
                    "activity": "Friend request",
                    "activityDate": 1625835679067,
                    "activityId": "c0a4f2b0-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c1c2bec1-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "james",
                    "activity": "Friend request",
                    "activityDate": 1625835680940,
                    "activityId": "c1c2bec1-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c2b02c01-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "bose",
                    "activity": "Friend request",
                    "activityDate": 1625835682496,
                    "activityId": "c2b02c01-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c36ee821-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "chigo",
                    "activity": "Friend request",
                    "activityDate": 1625835683746,
                    "activityId": "c36ee821-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c6361e71-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625835688407,
                    "activityId": "c6361e71-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c6e23cf0-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Ethan",
                    "activity": "Friend request",
                    "activityDate": 1625835689535,
                    "activityId": "c6e23cf0-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c7f66c11-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Josh",
                    "activity": "Friend request",
                    "activityDate": 1625835691345,
                    "activityId": "c7f66c11-e0b5-11eb-b9c1-cfb72beca659"
                },
                "c8d72f20-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Liam",
                    "activity": "Friend request",
                    "activityDate": 1625835692818,
                    "activityId": "c8d72f20-e0b5-11eb-b9c1-cfb72beca659"
                },
                "cc328f20-e0b5-11eb-b9c1-cfb72beca659": {
                    "friendUserName": "Lily",
                    "userName": "Ella",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625835698450,
                    "activityId": "cc328f20-e0b5-11eb-b9c1-cfb72beca659"
                },
                "e83d5c90-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ethan",
                    "activity": "commented",
                    "activityDate": 1625835745497,
                    "activityId": "e83d5c90-e0b5-11eb-b9c1-cfb72beca659"
                },
                "0f07ef20-e0b6-11eb-bb52-d5cdf6bb26a5": {
                    "userName": "Ella",
                    "activity": "posted",
                    "activityDate": 1625835810578,
                    "activityId": "0f07ef20-e0b6-11eb-bb52-d5cdf6bb26a5"
                },
                "e1e96b20-e0b7-11eb-9af9-d5891ea9efef": {
                    "userName": "Ella",
                    "activity": "logged in",
                    "activityDate": 1625836593874,
                    "activityId": "e1e96b20-e0b7-11eb-9af9-d5891ea9efef"
                },
                "590360d0-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Ella",
                    "posterUserName": "Ella",
                    "activity": "liked",
                    "activityDate": 1625836793693,
                    "activityId": "590360d0-e0b8-11eb-a091-bd97fb995f1d"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "a7f5e160-db39-11eb-af32-47b0df65ae76",
            "userProfileImage": require('../assets/postImages/ella-profilepix.jpg')
        },
        "Chloe": {
            "userName": "Chloe",
            "emailAddress": "Chloe@email.com",
            "password": "somedia",
            "firstName": "Chloe",
            "lastName": "  Santiago ",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                }
            ],
            "following": [
                {
                    "userName": "Liam"
                },
                {
                    "userName": "Logan"
                },
                {
                    "userName": "Olive"
                }
            ],
            "friends": [
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Sophie"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                    "videoId": "70a26fe0-e0dd-11eb-907b-171d7592562f",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/chloe-profilepix.jpg'),
                    "imageId": "58d01170-e0dc-11eb-907b-171d7592562f"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f4095a60-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945158
                },
                "54388180-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Chloe",
                    "notificationId": "54388180-e198-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625932992920
                },
                "5438a890-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Chloe",
                    "notificationId": "5438a890-e198-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625932992921
                },
                "8ee93240-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Chloe",
                    "notificationId": "8ee93240-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934379876
                },
                "24ff0560-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "notificationId": "24ff0560-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935061174
                },
                "24ff0561-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "notificationId": "24ff0561-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935061174
                },
                "ff89d430-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "notificationId": "ff89d430-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935427827
                },
                "ff89d432-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Ada",
                    "notificationId": "ff89d432-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935427827
                },
                "3832fc80-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Chloe",
                    "notificationId": "3832fc80-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935522888
                },
                "db297f40-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "notificationId": "db297f40-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023843124
                },
                "db29a650-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "notificationId": "db29a650-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023843125
                },
                "dd492af0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "notificationId": "dd492af0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023846687
                },
                "dd495201-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Olive",
                    "notificationId": "dd495201-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023846688
                },
                "de8d1ca0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "notificationId": "de8d1ca0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023848810
                },
                "de8d1ca2-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Chloe",
                    "commenterUserName": "Ada",
                    "notificationId": "de8d1ca2-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023848810
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "c5886040-db39-11eb-af32-47b0df65ae76": {
                    "userName": "Chloe",
                    "activity": "Created account",
                    "activityDate": 1625232673860,
                    "activityId": "c5886040-db39-11eb-af32-47b0df65ae76"
                },
                "34bc7e00-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "activity": "logged in",
                    "activityDate": 1625851765215,
                    "activityId": "34bc7e00-e0db-11eb-907b-171d7592562f"
                },
                "3a7afb51-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Sophie",
                    "activity": "liked",
                    "activityDate": 1625851774853,
                    "activityId": "3a7afb51-e0db-11eb-907b-171d7592562f"
                },
                "5b3fa752-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Sophie",
                    "activity": "commented",
                    "activityDate": 1625851829829,
                    "activityId": "5b3fa752-e0db-11eb-907b-171d7592562f"
                },
                "60a8b1a0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ruby",
                    "activity": "liked",
                    "activityDate": 1625851838906,
                    "activityId": "60a8b1a0-e0db-11eb-907b-171d7592562f"
                },
                "7a6cea71-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ruby",
                    "activity": "commented",
                    "activityDate": 1625851882135,
                    "activityId": "7a6cea71-e0db-11eb-907b-171d7592562f"
                },
                "b9aaa4c0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ella",
                    "activity": "commented",
                    "activityDate": 1625851988236,
                    "activityId": "b9aaa4c0-e0db-11eb-907b-171d7592562f"
                },
                "caee3301-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625852017200,
                    "activityId": "caee3301-e0db-11eb-907b-171d7592562f"
                },
                "ccfc0462-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ella",
                    "activity": "liked",
                    "activityDate": 1625852020646,
                    "activityId": "ccfc0462-e0db-11eb-907b-171d7592562f"
                },
                "d0949472-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625852026679,
                    "activityId": "d0949472-e0db-11eb-907b-171d7592562f"
                },
                "d2fda532-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625852030723,
                    "activityId": "d2fda532-e0db-11eb-907b-171d7592562f"
                },
                "d4875272-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625852033303,
                    "activityId": "d4875272-e0db-11eb-907b-171d7592562f"
                },
                "d68c9852-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625852036693,
                    "activityId": "d68c9852-e0db-11eb-907b-171d7592562f"
                },
                "d84f2fe1-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625852039646,
                    "activityId": "d84f2fe1-e0db-11eb-907b-171d7592562f"
                },
                "dae78e01-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625852044000,
                    "activityId": "dae78e01-e0db-11eb-907b-171d7592562f"
                },
                "de6da782-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ivy",
                    "activity": "liked",
                    "activityDate": 1625852049912,
                    "activityId": "de6da782-e0db-11eb-907b-171d7592562f"
                },
                "70a296f1-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "activity": "posted",
                    "activityDate": 1625852724703,
                    "activityId": "70a296f1-e0dd-11eb-907b-171d7592562f"
                },
                "7cd721c0-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Ella",
                    "userName": "Chloe",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625852745179,
                    "activityId": "7cd721c0-e0dd-11eb-907b-171d7592562f"
                },
                "7e4509a0-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Lily",
                    "userName": "Chloe",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625852747578,
                    "activityId": "7e4509a0-e0dd-11eb-907b-171d7592562f"
                },
                "7f525af0-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Sophie",
                    "userName": "Chloe",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625852749343,
                    "activityId": "7f525af0-e0dd-11eb-907b-171d7592562f"
                },
                "827d3510-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625852754657,
                    "activityId": "827d3510-e0dd-11eb-907b-171d7592562f"
                },
                "8348e981-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Ethan",
                    "activity": "Friend request",
                    "activityDate": 1625852755992,
                    "activityId": "8348e981-e0dd-11eb-907b-171d7592562f"
                },
                "84a32251-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Josh",
                    "activity": "Friend request",
                    "activityDate": 1625852758261,
                    "activityId": "84a32251-e0dd-11eb-907b-171d7592562f"
                },
                "857b0bc1-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Liam",
                    "activity": "Friend request",
                    "activityDate": 1625852759676,
                    "activityId": "857b0bc1-e0dd-11eb-907b-171d7592562f"
                },
                "937402e1-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Liam",
                    "userName": "Chloe",
                    "activity": "followed",
                    "activityDate": 1625852783118,
                    "activityId": "937402e1-e0dd-11eb-907b-171d7592562f"
                },
                "951333f1-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Logan",
                    "userName": "Chloe",
                    "activity": "followed",
                    "activityDate": 1625852785839,
                    "activityId": "951333f1-e0dd-11eb-907b-171d7592562f"
                },
                "96a71a60-e0dd-11eb-907b-171d7592562f": {
                    "friendUserName": "Olive",
                    "userName": "Chloe",
                    "activity": "followed",
                    "activityDate": 1625852788486,
                    "activityId": "96a71a60-e0dd-11eb-907b-171d7592562f"
                },
                "eed47f70-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "activity": "logged in",
                    "activityDate": 1625852936423,
                    "activityId": "eed47f70-e0dd-11eb-9684-6f71396aed14"
                },
                "f40a1db0-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "activity": "liked",
                    "activityDate": 1625852945163,
                    "activityId": "f40a1db0-e0dd-11eb-9684-6f71396aed14"
                },
                "0fb14750-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "activity": "liked",
                    "activityDate": 1625852991557,
                    "activityId": "0fb14750-e0de-11eb-9684-6f71396aed14"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "c5883930-db39-11eb-af32-47b0df65ae76",
            "userProfileImage": require('../assets/postImages/chloe-profilepix.jpg')
        },
        "Lily": {
            "userName": "Lily",
            "emailAddress": "Lily@email.com",
            "password": "somedia",
            "firstName": "Lily",
            "lastName": "Parker ",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Ava"
                },
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                },
                {
                    "userName": "Smith"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "blob:http://localhost:8080/3b4c8f82-83ab-4390-8e38-862d3e9f2050",
                    "videoId": "0ceeb270-e32f-11eb-a03f-b542039adbaa",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": require('../assets/postImages/lily-post1.jpeg'),
                    "imageId": "e5b7ea90-dc1d-11eb-b872-29eca492d404"
                },

                {
                    "imageUrl":require('../assets/postImages/lily-profilePix.jpg'),
                    "imageId": "bfd93e80-dda5-11eb-8fea-e7ca4e285f55"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "eb0f68b0-dc1d-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "posterUserName": "Lily",
                    "notificationId": "eb0f68b0-dc1d-11eb-b872-29eca492d404",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625330662075
                },
                "479d2e80-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Lily",
                    "notificationId": "479d2e80-df3b-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625673126248
                },
                "e062b0f0-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Lily",
                    "notificationId": "e062b0f0-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675100543
                },
                "e2753d42-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Lily",
                    "commenterUserName": "Nova",
                    "notificationId": "e2753d42-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675104020
                },
                "264ee680-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Lily",
                    "notificationId": "264ee680-df43-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625676506344
                },
                "8db47f20-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "notificationId": "8db47f20-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800804370
                },
                "8f288182-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "commenterUserName": "Nova",
                    "notificationId": "8f288182-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800806808
                },
                "900e4da1-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "commenterUserName": "Mia",
                    "notificationId": "900e4da1-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800808314
                },
                "71947800-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Sophie",
                    "friendUserName": "Lily",
                    "notificationId": "71947800-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625819655040
                },
                "9f39a640-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "friendUserName": "Lily",
                    "notificationId": "9f39a640-e090-11eb-bcb8-25b2107d0c08",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625819731620
                },
                "4f38bd00-e0ab-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "notificationId": "4f38bd00-e0ab-11eb-bcb8-25b2107d0c08",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625831193808
                },
                "53730b50-e0ab-11eb-bcb8-25b2107d0c08": {
                    "userName": "Ava",
                    "posterUserName": "Ava",
                    "notificationId": "53730b50-e0ab-11eb-bcb8-25b2107d0c08",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625831200901
                },
                "f9941e51-e0ad-11eb-a170-d99d0616bfb4": {
                    "userName": "Ethan",
                    "friendUserName": "Lily",
                    "notificationId": "f9941e51-e0ad-11eb-a170-d99d0616bfb4",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832338613
                },
                "7cc22910-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "notificationId": "7cc22910-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625832988194
                },
                "8f0a5610-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ava",
                    "notificationId": "8f0a5610-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833018865
                },
                "92948e40-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "notificationId": "92948e40-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833024804
                },
                "abf80970-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Mia",
                    "notificationId": "abf80970-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833067399
                },
                "f0654780-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "notificationId": "f0654780-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833182200
                },
                "f0656e91-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "notificationId": "f0656e91-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833182201
                },
                "f40e5250-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "notificationId": "f40e5250-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833188341
                },
                "fa02d3c1-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "notificationId": "fa02d3c1-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833198332
                },
                "00d58032-e0b0-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "notificationId": "00d58032-e0b0-11eb-90ca-19effd8b5a00",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833209779
                },
                "7f533ec0-e0b0-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Ethan",
                    "notificationId": "7f533ec0-e0b0-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833421996
                },
                "cc32b630-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "friendUserName": "Lily",
                    "notificationId": "cc32b630-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835698451
                },
                "e83d3581-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "posterUserName": "Ethan",
                    "notificationId": "e83d3581-e0b5-11eb-b9c1-cfb72beca659",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835745496
                },
                "0f07c810-e0b6-11eb-bb52-d5cdf6bb26a5": {
                    "userName": "Ella",
                    "notificationId": "0f07c810-e0b6-11eb-bb52-d5cdf6bb26a5",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625835810577
                },
                "59029d80-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Ella",
                    "posterUserName": "Ella",
                    "notificationId": "59029d80-e0b8-11eb-a091-bd97fb995f1d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625836793688
                },
                "292b7ea1-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Lily",
                    "notificationId": "292b7ea1-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837142922
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "notificationId": "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837351228
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344194
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838362116
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb30560-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543030
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "9992ced0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337981
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "bb25c750-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840394309
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceacfe0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397278
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "cae26771-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840420711
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b53010-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430481
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "notificationId": "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840933636
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959241
                },
                "dae766f0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Lily",
                    "notificationId": "dae766f0-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852043999
                },
                "7e4530b0-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Lily",
                    "notificationId": "7e4530b0-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852747579
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f4095a60-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945158
                },
                "7ce89591-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Lily",
                    "notificationId": "7ce89591-e19b-11eb-871f-0f966330432a",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934349673
                },
                "1cd055f1-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Lily",
                    "notificationId": "1cd055f1-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935476943
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "notificationId": "77d296c0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023676460
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693645
                },
                "be44ff91-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Lily",
                    "notificationId": "be44ff91-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051282441
                },
                "1a45f5e0-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Lily",
                    "notificationId": "1a45f5e0-e330-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626108130366
                },
                "1a464400-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "posterUserName": "Lily",
                    "notificationId": "1a464400-e330-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626108130368
                },
                "45c991c0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "notificationId": "45c991c0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109062364
                },
                "45c991c1-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "notificationId": "45c991c1-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109062364
                },
                "482c12d0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "notificationId": "482c12d0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109066365
                },
                "482c60f0-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Josh",
                    "posterUserName": "Lily",
                    "commenterUserName": "Sebby",
                    "notificationId": "482c60f0-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109066367
                },
                "737d8d10-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Logan",
                    "posterUserName": "Lily",
                    "notificationId": "737d8d10-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109139041
                },
                "737db420-e332-11eb-97fc-8d90948c2e0c": {
                    "userName": "Logan",
                    "posterUserName": "Lily",
                    "notificationId": "737db420-e332-11eb-97fc-8d90948c2e0c",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626109139042
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "df515400-db39-11eb-af32-47b0df65ae76": {
                    "userName": "Lily",
                    "activity": "Created account",
                    "activityDate": 1625232717120,
                    "activityId": "df515400-db39-11eb-af32-47b0df65ae76"
                },
                "ec5b1f60-dc19-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "activity": "logged in",
                    "activityDate": 1625328946262,
                    "activityId": "ec5b1f60-dc19-11eb-9e4e-33ab2bd5ac9e"
                },
                "f6925391-dc19-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "posterUserName": "Ivy",
                    "activity": "liked",
                    "activityDate": 1625328963401,
                    "activityId": "f6925391-dc19-11eb-9e4e-33ab2bd5ac9e"
                },
                "1afbebb0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "posterUserName": "Ivy",
                    "activity": "commented",
                    "activityDate": 1625329024491,
                    "activityId": "1afbebb0-dc1a-11eb-9e4e-33ab2bd5ac9e"
                },
                "e5b811a1-dc1d-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "activity": "posted",
                    "activityDate": 1625330653114,
                    "activityId": "e5b811a1-dc1d-11eb-b872-29eca492d404"
                },
                "eb0f68b2-dc1d-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625330662075,
                    "activityId": "eb0f68b2-dc1d-11eb-b872-29eca492d404"
                },
                "20914a30-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Sophie",
                    "activity": "Friend request",
                    "activityDate": 1625418798675,
                    "activityId": "20914a30-dceb-11eb-b872-29eca492d404"
                },
                "23a08601-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Smith",
                    "activity": "Friend request",
                    "activityDate": 1625418803808,
                    "activityId": "23a08601-dceb-11eb-b872-29eca492d404"
                },
                "26150871-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Ivy",
                    "activity": "Friend request",
                    "activityDate": 1625418807927,
                    "activityId": "26150871-dceb-11eb-b872-29eca492d404"
                },
                "279eb5b0-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "bose",
                    "activity": "Friend request",
                    "activityDate": 1625418810507,
                    "activityId": "279eb5b0-dceb-11eb-b872-29eca492d404"
                },
                "2aae1891-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Josh",
                    "activity": "Friend request",
                    "activityDate": 1625418815641,
                    "activityId": "2aae1891-dceb-11eb-b872-29eca492d404"
                },
                "2c082a51-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Ethan",
                    "activity": "Friend request",
                    "activityDate": 1625418817909,
                    "activityId": "2c082a51-dceb-11eb-b872-29eca492d404"
                },
                "2dc0afc0-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Carter",
                    "activity": "Friend request",
                    "activityDate": 1625418820796,
                    "activityId": "2dc0afc0-dceb-11eb-b872-29eca492d404"
                },
                "68d5e0a0-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "activity": "logged in",
                    "activityDate": 1626107403178,
                    "activityId": "68d5e0a0-e32e-11eb-a03f-b542039adbaa"
                },
                "8fa2e431-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "activity": "liked",
                    "activityDate": 1626107468275,
                    "activityId": "8fa2e431-e32e-11eb-a03f-b542039adbaa"
                },
                "96570c20-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "activity": "liked",
                    "activityDate": 1626107479522,
                    "activityId": "96570c20-e32e-11eb-a03f-b542039adbaa"
                },
                "0cef0090-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "activity": "posted",
                    "activityDate": 1626107678489,
                    "activityId": "0cef0090-e32f-11eb-a03f-b542039adbaa"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
            "userProfileImage":require('../assets/postImages/lily-profilePix.jpg')
        },
        "Nova": {
            "userName": "Nova",
            "emailAddress": "Nova@email.com",
            "password": "somedia",
            "firstName": "Nova",
            "lastName": "Christen",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [
                {
                    "userName": "Nova",
                    "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "datePosted": 1625674899747,
                    "posts": "My love for flowers    ❤❤❤❤💖💖💖💖",
                    "likes": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "44371160-df41-11eb-a210-09083f776f3d": {
                            "userName": "Carter",
                            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                            "comment": "I also love flowers 😊😊😊",
                            "dateCommented": 1625675697526,
                            "commentId": "44371160-df41-11eb-a210-09083f776f3d",
                            "likes": [],
                            "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                            "imageId": "68b3a731-df3f-11eb-a210-09083f776f3d"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Nova",
                    "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "datePosted": 1625674899747,
                    "posts": "My love for flowers    ❤❤❤❤💖💖💖💖",
                    "likes": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "44371160-df41-11eb-a210-09083f776f3d": {
                            "userName": "Carter",
                            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                            "comment": "I also love flowers 😊😊😊",
                            "dateCommented": 1625675697526,
                            "commentId": "44371160-df41-11eb-a210-09083f776f3d",
                            "likes": [],
                            "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                            "imageId": "68b3a731-df3f-11eb-a210-09083f776f3d"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Nova",
                    "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "datePosted": 1625674899747,
                    "posts": "My love for flowers    ❤❤❤❤💖💖💖💖",
                    "likes": [
                        "Nova",
                        "Carter",
                        "Mia"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "44371160-df41-11eb-a210-09083f776f3d": {
                            "userName": "Carter",
                            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                            "comment": "I also love flowers 😊😊😊",
                            "dateCommented": 1625675697526,
                            "commentId": "44371160-df41-11eb-a210-09083f776f3d",
                            "likes": [],
                            "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                            "imageId": "68b3a731-df3f-11eb-a210-09083f776f3d"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                }
            ],
            "followers": [
                {
                    "userName": "Ada"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "blob:http://localhost:8080/829f6b54-1eec-4bd9-92ec-ed1d87fc6bbe",
                    "imageId": "c1622a80-df3c-11eb-a210-09083f776f3d"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                    "imageId": "68b3ce40-df3f-11eb-a210-09083f776f3d"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "731b1320-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Nova",
                    "notificationId": "731b1320-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625674917202
                },
                "de4660a0-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Nova",
                    "notificationId": "de4660a0-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675097002
                },
                "de4687b0-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Nova",
                    "notificationId": "de4687b0-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675097003
                },
                "24f60d40-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "notificationId": "24f60d40-df43-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625676504084
                },
                "24f63450-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "notificationId": "24f63450-df43-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625676504085
                },
                "73f920a0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "notificationId": "73f920a0-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625680072618
                },
                "73f947b1-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "posterUserName": "Nova",
                    "commenterUserName": "Carter",
                    "notificationId": "73f947b1-df4b-11eb-961c-b7b5c586ebc2",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625680072619
                },
                "89c9b060-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "notificationId": "89c9b060-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800797798
                },
                "89c9d770-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "notificationId": "89c9d770-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800797799
                },
                "8c5479f0-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "notificationId": "8c5479f0-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800802063
                },
                "8c5479f2-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "commenterUserName": "Mia",
                    "notificationId": "8c5479f2-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800802063
                },
                "f40e5250-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "notificationId": "f40e5250-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833188341
                },
                "f40e5251-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "posterUserName": "Nova",
                    "notificationId": "f40e5251-e0af-11eb-90ca-19effd8b5a00",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833188341
                },
                "d84f08d0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Nova",
                    "notificationId": "d84f08d0-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852039645
                },
                "d84f2fe0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Nova",
                    "notificationId": "d84f2fe0-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852039646
                },
                "9044caa0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Nova",
                    "notificationId": "9044caa0-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934382154
                },
                "2ea500a0-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Nova",
                    "notificationId": "2ea500a0-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935506858
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "3e2a0760-db3a-11eb-af32-47b0df65ae76": {
                    "userName": "Nova",
                    "activity": "Created account",
                    "activityDate": 1625232876246,
                    "activityId": "3e2a0760-db3a-11eb-af32-47b0df65ae76"
                },
                "479d5591-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625673126249,
                    "activityId": "479d5591-df3b-11eb-a210-09083f776f3d"
                },
                "533f8b70-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Lily",
                    "activity": "commented",
                    "activityDate": 1625673145767,
                    "activityId": "533f8b70-df3b-11eb-a210-09083f776f3d"
                },
                "5cd6fd32-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "activity": "liked",
                    "activityDate": 1625673161859,
                    "activityId": "5cd6fd32-df3b-11eb-a210-09083f776f3d"
                },
                "63fcf9c1-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "activity": "commented",
                    "activityDate": 1625673173852,
                    "activityId": "63fcf9c1-df3b-11eb-a210-09083f776f3d"
                },
                "69353011-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "commenterUserName": "Lily",
                    "activity": "likedComment",
                    "activityDate": 1625673182609,
                    "activityId": "69353011-df3b-11eb-a210-09083f776f3d"
                },
                "68b3f550-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "activity": "posted",
                    "activityDate": 1625674899749,
                    "activityId": "68b3f550-df3f-11eb-a210-09083f776f3d"
                },
                "731b3a31-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625674917203,
                    "activityId": "731b3a31-df3f-11eb-a210-09083f776f3d"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
            "userProfileImage": "blob:http://localhost:8080/829f6b54-1eec-4bd9-92ec-ed1d87fc6bbe"
        },
        "Ivy": {
            "userName": "Ivy",
            "emailAddress": "Ivy@email.com",
            "password": "somedia",
            "firstName": "Ivy",
            "lastName": " Maverick ",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                },
                {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "views": [
                        "Ivy",
                        "Lily"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "datePosted": 1625328810454,
                    "posts": "Hi Guys ,How was your day",
                    "likes": [
                        "Lily"
                    ],
                    "unLikes": [],
                    "posterComment": "",
                    "comments": {
                        "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                            "userName": "Lily",
                            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                            "comment": "It was good and you dear?",
                            "dateCommented": 1625329024490,
                            "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                            "likes": [],
                            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                            "unLikes": []
                        }
                    },
                    "postStyle": "text-theme-default",
                    "postImages": [
                        {
                            "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                            "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                        }
                    ],
                    "postVideos": {
                        "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                        "videoId": "",
                        "videoAutoplay": false
                    }
                }
            ],
            "followers": [
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                }
            ],
            "following": [],
            "friends": [],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "blob:http://localhost:8080/655d5ac5-fb70-4a02-976f-be24d9a830b8",
                    "imageId": "11bca180-dc19-11eb-9e4e-33ab2bd5ac9e"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/a0cb8cc0-3c7f-494e-b917-67764180ff83",
                    "imageId": "21338610-dc19-11eb-9e4e-33ab2bd5ac9e"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/c150461e-ae89-4d70-93f9-fd1cf32221ad",
                    "imageId": "2cb821d0-dc19-11eb-9e4e-33ab2bd5ac9e"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                    "imageId": "9b687762-dc19-11eb-9e4e-33ab2bd5ac9e"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "f6922c80-dc19-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "posterUserName": "Ivy",
                    "notificationId": "f6922c80-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625328963400
                },
                "f6925390-dc19-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "posterUserName": "Ivy",
                    "notificationId": "f6925390-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625328963401
                },
                "26150870-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Ivy",
                    "notificationId": "26150870-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625418807927
                },
                "5cd6fd30-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "notificationId": "5cd6fd30-df3b-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625673161859
                },
                "5cd6fd31-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "notificationId": "5cd6fd31-df3b-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625673161859
                },
                "69353010-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "notificationId": "69353010-df3b-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625673182609
                },
                "69353012-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "posterUserName": "Ivy",
                    "commenterUserName": "Lily",
                    "notificationId": "69353012-df3b-11eb-a210-09083f776f3d",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625673182609
                },
                "fac94440-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Ivy",
                    "notificationId": "fac94440-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675144836
                },
                "fac94441-df3f-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "posterUserName": "Ivy",
                    "notificationId": "fac94441-df3f-11eb-a210-09083f776f3d",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625675144836
                },
                "92162b90-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Ivy",
                    "notificationId": "92162b90-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800811721
                },
                "92162b91-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Ivy",
                    "notificationId": "92162b91-e064-11eb-8d8d-bf9aae01f450",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625800811722
                },
                "de6da780-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ivy",
                    "notificationId": "de6da780-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852049912
                },
                "de6da781-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ivy",
                    "notificationId": "de6da781-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852049912
                },
                "917b4ed0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Ivy",
                    "notificationId": "917b4ed0-e19b-11eb-871f-0f966330432a",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934384189
                },
                "32965f10-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ivy",
                    "notificationId": "32965f10-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935513473
                },
                "3b5d1350-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ivy",
                    "notificationId": "3b5d1350-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935528198
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "5c8f1880-db3a-11eb-af32-47b0df65ae76": {
                    "userName": "Ivy",
                    "activity": "Created account",
                    "activityDate": 1625232927240,
                    "activityId": "5c8f1880-db3a-11eb-af32-47b0df65ae76"
                },
                "8243c910-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "activity": "logged in",
                    "activityDate": 1625240721441,
                    "activityId": "8243c910-db4c-11eb-abaf-9f6519f91aa1"
                },
                "ca7fc262-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "posterUserName": "uche",
                    "activity": "liked",
                    "activityDate": 1625240842630,
                    "activityId": "ca7fc262-db4c-11eb-abaf-9f6519f91aa1"
                },
                "f3c7b101-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "posterUserName": "uche",
                    "activity": "commented",
                    "activityDate": 1625240911888,
                    "activityId": "f3c7b101-db4c-11eb-abaf-9f6519f91aa1"
                },
                "9b689e71-dc19-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Ivy",
                    "activity": "posted",
                    "activityDate": 1625328810455,
                    "activityId": "9b689e71-dc19-11eb-9e4e-33ab2bd5ac9e"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
            "userProfileImage": "blob:http://localhost:8080/c150461e-ae89-4d70-93f9-fd1cf32221ad"
        },
        "Sophie": {
            "userName": "Sophie",
            "emailAddress": "Sophie@email.com",
            "password": "somedia",
            "firstName": "Sophie",
            "lastName": "Roman",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [],
            "following": [],
            "friends": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Olive"
                },
                {
                    "userName": "Smith"
                }
            ],
            "age": "",
            "education": "",
            "videos": [
                {
                    "videoUrl": "blob:http://localhost:8080/ad4435a1-e3e8-4668-afed-42abbe85da15",
                    "videoId": "fc9c6530-e0c1-11eb-85f3-797226efa932",
                    "videoAutoplay": false
                }
            ],
            "photos": [
                {
                    "imageUrl": "blob:http://localhost:8080/35806a50-13d2-4eb2-8645-b02c07c0f853",
                    "imageId": "93ae3670-e0c1-11eb-85f3-797226efa932"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "20912320-dceb-11eb-b872-29eca492d404": {
                    "userName": "Lily",
                    "friendUserName": "Sophie",
                    "notificationId": "20912320-dceb-11eb-b872-29eca492d404",
                    "notificationType": "friend request",
                    "notificationStatus": "Read",
                    "notificationDate": 1625418798674
                },
                "ff836840-e0b0-11eb-9f24-351dd7c3fe0f": {
                    "userName": "Ethan",
                    "friendUserName": "Sophie",
                    "notificationId": "ff836840-e0b0-11eb-9f24-351dd7c3fe0f",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625833637060
                },
                "2a1e9131-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "friendUserName": "Sophie",
                    "notificationId": "2a1e9131-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837144515
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                    "userName": "Carter",
                    "notificationId": "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625837351228
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Ava",
                    "notificationId": "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838344194
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Mia",
                    "notificationId": "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838346598
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838362116
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                    "userName": "Carter",
                    "posterUserName": "Carter",
                    "notificationId": "6bb30560-e0bc-11eb-acf8-97f832451a98",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625838543030
                },
                "50554401-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Sophie",
                    "notificationId": "50554401-e0c0-11eb-8787-59040f6b2cc8",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840215104
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959241
                },
                "3a7ad440-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Sophie",
                    "notificationId": "3a7ad440-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625851774852
                },
                "3a7afb50-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Sophie",
                    "notificationId": "3a7afb50-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625851774853
                },
                "7f525af1-e0dd-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "friendUserName": "Sophie",
                    "notificationId": "7f525af1-e0dd-11eb-907b-171d7592562f",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852749343
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f4095a60-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945158
                },
                "f409f6a0-e0dd-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "f409f6a0-e0dd-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852945162
                },
                "06f9fc60-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "06f9fc60-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852976934
                },
                "088a3950-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "088a3950-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852979557
                },
                "0fb0f930-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "0fb0f930-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852991555
                },
                "0fb12040-e0de-11eb-9684-6f71396aed14": {
                    "userName": "Chloe",
                    "posterUserName": "Chloe",
                    "notificationId": "0fb12040-e0de-11eb-9684-6f71396aed14",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625852991556
                },
                "6910a0d0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "notificationId": "6910a0d0-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934316381
                },
                "6910a0d1-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "notificationId": "6910a0d1-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934316381
                },
                "6af602a0-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "notificationId": "6af602a0-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934319563
                },
                "6af69ee1-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Sophie",
                    "commenterUserName": "Chloe",
                    "notificationId": "6af69ee1-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934319566
                },
                "7d642e31-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "friendUserName": "Sophie",
                    "notificationId": "7d642e31-e19b-11eb-871f-0f966330432a",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934350483
                },
                "279e4150-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "notificationId": "279e4150-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935065573
                },
                "279e4151-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "notificationId": "279e4151-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935065573
                },
                "01175200-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "notificationId": "01175200-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935430432
                },
                "01175202-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Sophie",
                    "commenterUserName": "Chloe",
                    "notificationId": "01175202-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935430432
                },
                "1f360b51-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Sophie",
                    "notificationId": "1f360b51-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935480966
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "notificationId": "77d296c0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023676460
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693645
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Olive",
                    "posterUserName": "Olive",
                    "notificationId": "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023693646
                },
                "e097e0c0-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Sophie",
                    "notificationId": "e097e0c0-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023852236
                },
                "e097e0c1-e26b-11eb-af05-7d0898d50a19": {
                    "userName": "Liam",
                    "posterUserName": "Sophie",
                    "notificationId": "e097e0c1-e26b-11eb-af05-7d0898d50a19",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626023852236
                },
                "bfd9f771-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Sophie",
                    "notificationId": "bfd9f771-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "Accepted Friend Request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051285095
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa29610-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468273
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Smith",
                    "notificationId": "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107468275
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656be00-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479520
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "posterUserName": "Liam",
                    "notificationId": "9656e510-e32e-11eb-a03f-b542039adbaa",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107479521
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                    "userName": "Lily",
                    "notificationId": "0ceed980-e32f-11eb-a03f-b542039adbaa",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626107678488
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "7b156d40-db3a-11eb-af32-47b0df65ae76": {
                    "userName": "Sophie",
                    "activity": "Created account",
                    "activityDate": 1625232978452,
                    "activityId": "7b156d40-db3a-11eb-af32-47b0df65ae76"
                },
                "7601c130-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "activity": "logged in",
                    "activityDate": 1625800764611,
                    "activityId": "7601c130-e064-11eb-8d8d-bf9aae01f450"
                },
                "7b59db92-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Mia",
                    "activity": "liked",
                    "activityDate": 1625800773577,
                    "activityId": "7b59db92-e064-11eb-8d8d-bf9aae01f450"
                },
                "86b5e0b0-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "commenterUserName": "Mia",
                    "activity": "likedComment",
                    "activityDate": 1625800792635,
                    "activityId": "86b5e0b0-e064-11eb-8d8d-bf9aae01f450"
                },
                "87e49cb1-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625800794619,
                    "activityId": "87e49cb1-e064-11eb-8d8d-bf9aae01f450"
                },
                "89c9d771-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "activity": "liked",
                    "activityDate": 1625800797799,
                    "activityId": "89c9d771-e064-11eb-8d8d-bf9aae01f450"
                },
                "8c5479f1-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Nova",
                    "commenterUserName": "Mia",
                    "activity": "likedComment",
                    "activityDate": 1625800802063,
                    "activityId": "8c5479f1-e064-11eb-8d8d-bf9aae01f450"
                },
                "8db47f22-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "activity": "liked",
                    "activityDate": 1625800804370,
                    "activityId": "8db47f22-e064-11eb-8d8d-bf9aae01f450"
                },
                "8f288181-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "commenterUserName": "Nova",
                    "activity": "likedComment",
                    "activityDate": 1625800806808,
                    "activityId": "8f288181-e064-11eb-8d8d-bf9aae01f450"
                },
                "900e4da0-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Lily",
                    "commenterUserName": "Mia",
                    "activity": "likedComment",
                    "activityDate": 1625800808314,
                    "activityId": "900e4da0-e064-11eb-8d8d-bf9aae01f450"
                },
                "921652a0-e064-11eb-8d8d-bf9aae01f450": {
                    "userName": "Sophie",
                    "posterUserName": "Ivy",
                    "activity": "liked",
                    "activityDate": 1625800811722,
                    "activityId": "921652a0-e064-11eb-8d8d-bf9aae01f450"
                },
                "719450f0-e090-11eb-bcb8-25b2107d0c08": {
                    "friendUserName": "Lily",
                    "userName": "Sophie",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625819655039,
                    "activityId": "719450f0-e090-11eb-bcb8-25b2107d0c08"
                },
                "770e9950-e090-11eb-bcb8-25b2107d0c08": {
                    "userName": "Sophie",
                    "friendUserName": "Ava",
                    "activity": "Friend request",
                    "activityDate": 1625819664229,
                    "activityId": "770e9950-e090-11eb-bcb8-25b2107d0c08"
                },
                "99934400-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "activity": "liked",
                    "activityDate": 1625840337984,
                    "activityId": "99934400-e0c0-11eb-85f3-797226efa932"
                },
                "bb25ee60-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "activity": "commented",
                    "activityDate": 1625840394310,
                    "activityId": "bb25ee60-e0c0-11eb-85f3-797226efa932"
                },
                "bceb1e01-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625840397280,
                    "activityId": "bceb1e01-e0c0-11eb-85f3-797226efa932"
                },
                "cae28e80-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "activity": "commented",
                    "activityDate": 1625840420712,
                    "activityId": "cae28e80-e0c0-11eb-85f3-797226efa932"
                },
                "cf0ab460-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "activity": "liked",
                    "activityDate": 1625840427686,
                    "activityId": "cf0ab460-e0c0-11eb-85f3-797226efa932"
                },
                "d0b5a540-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "activity": "liked",
                    "activityDate": 1625840430484,
                    "activityId": "d0b5a540-e0c0-11eb-85f3-797226efa932"
                },
                "fc9cb350-e0c1-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "activity": "posted",
                    "activityDate": 1625840933637,
                    "activityId": "fc9cb350-e0c1-11eb-85f3-797226efa932"
                },
                "0bdfddb0-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "activity": "liked",
                    "activityDate": 1625840959243,
                    "activityId": "0bdfddb0-e0c2-11eb-85f3-797226efa932"
                },
                "ae3072a0-e0c2-11eb-b6c9-55522da2a112": {
                    "userName": "Sophie",
                    "activity": "logged in",
                    "activityDate": 1625841231562,
                    "activityId": "ae3072a0-e0c2-11eb-b6c9-55522da2a112"
                },
                "a52834a0-e0da-11eb-b6c9-55522da2a112": {
                    "userName": "Sophie",
                    "activity": "logged in",
                    "activityDate": 1625851524330,
                    "activityId": "a52834a0-e0da-11eb-b6c9-55522da2a112"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "7b154630-db3a-11eb-af32-47b0df65ae76",
            "userProfileImage": "blob:http://localhost:8080/35806a50-13d2-4eb2-8645-b02c07c0f853"
        },
        "Ruby": {
            "userName": "Ruby",
            "emailAddress": "Ruby@email.com",
            "password": "somedia",
            "firstName": "Ruby",
            "lastName": "Jones",
            "gender": "Female",
            "address": "",
            "postCode": "",
            "country": "",
            "city": "",
            "aboutMe": "",
            "posts": [],
            "followers": [
                {
                    "userName": "Olive"
                }
            ],
            "following": [],
            "friends": [
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Sophie"
                }
            ],
            "age": "",
            "education": "",
            "videos": [],
            "photos": [
                {
                    "imageUrl": "blob:http://localhost:8080/af7a90fb-4df5-4c9b-a9c1-1618db18d505",
                    "imageId": "b13fdce0-e0bf-11eb-8787-59040f6b2cc8"
                },
                {
                    "imageUrl": "blob:http://localhost:8080/5dbed625-82f3-4962-b7c8-56c52dc29513",
                    "imageId": "1c9c7390-e0c0-11eb-8787-59040f6b2cc8"
                }
            ],
            "messages": {},
            "messageStatus": {},
            "notifications": {
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "9992ced0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337981
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "99931cf0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840337983
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ruby",
                    "notificationId": "bb25c750-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840394309
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceacfe0-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397278
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "bceb1e00-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840397280
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Carter",
                    "notificationId": "cae26771-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "comment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840420711
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ethan",
                    "notificationId": "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840427685
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b53010-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430481
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Ava",
                    "notificationId": "d0b57e30-e0c0-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840430483
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "notificationId": "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                    "notificationType": "post",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840933636
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959241
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "posterUserName": "Sophie",
                    "notificationId": "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625840959242
                },
                "60a88a90-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ruby",
                    "notificationId": "60a88a90-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625851838905
                },
                "60a88a91-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "posterUserName": "Ruby",
                    "notificationId": "60a88a91-e0db-11eb-907b-171d7592562f",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625851838905
                },
                "6e2c4e70-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Ruby",
                    "notificationId": "6e2c4e70-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934324951
                },
                "6e2c4e71-e19b-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "posterUserName": "Ruby",
                    "notificationId": "6e2c4e71-e19b-11eb-871f-0f966330432a",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625934324951
                },
                "ec752f70-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "notificationId": "ec752f70-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935395815
                },
                "ec755680-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "notificationId": "ec755680-e19d-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935395816
                },
                "02d3a800-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "notificationId": "02d3a800-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "likes",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935433344
                },
                "02d3cf11-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "posterUserName": "Ruby",
                    "commenterUserName": "Sophie",
                    "notificationId": "02d3cf11-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "likedComment",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935433345
                },
                "239c2490-e19e-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "friendUserName": "Ruby",
                    "notificationId": "239c2490-e19e-11eb-86e8-11fcf2392733",
                    "notificationType": "follow",
                    "notificationStatus": "unRead",
                    "notificationDate": 1625935488345
                },
                "d4e7d420-e2ab-11eb-8a39-b39ebfa4685e": {
                    "userName": "Smith",
                    "friendUserName": "Ruby",
                    "notificationId": "d4e7d420-e2ab-11eb-8a39-b39ebfa4685e",
                    "notificationType": "friend request",
                    "notificationStatus": "unRead",
                    "notificationDate": 1626051320418
                }
            },
            "occupation": "",
            "status": "online",
            "activities": {
                "964fa440-db3a-11eb-af32-47b0df65ae76": {
                    "userName": "Ruby",
                    "activity": "Created account",
                    "activityDate": 1625233024132,
                    "activityId": "964fa440-db3a-11eb-af32-47b0df65ae76"
                },
                "0f06d980-e0bd-11eb-acf8-97f832451a98": {
                    "userName": "Ruby",
                    "activity": "logged in",
                    "activityDate": 1625838817048,
                    "activityId": "0f06d980-e0bd-11eb-acf8-97f832451a98"
                },
                "1c51dd60-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Carter",
                    "activity": "liked",
                    "activityDate": 1625838839350,
                    "activityId": "1c51dd60-e0bd-11eb-8787-59040f6b2cc8"
                },
                "1f7f2882-e0bd-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Ella",
                    "activity": "liked",
                    "activityDate": 1625838844680,
                    "activityId": "1f7f2882-e0bd-11eb-8787-59040f6b2cc8"
                },
                "1c9c9aa0-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "activity": "posted",
                    "activityDate": 1625840128330,
                    "activityId": "1c9c9aa0-e0c0-11eb-8787-59040f6b2cc8"
                },
                "351b5b21-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "posterUserName": "Carter",
                    "activity": "commented",
                    "activityDate": 1625840169426,
                    "activityId": "351b5b21-e0c0-11eb-8787-59040f6b2cc8"
                },
                "4f2a5890-e0c0-11eb-8787-59040f6b2cc8": {
                    "friendUserName": "Ella",
                    "userName": "Ruby",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625840213145,
                    "activityId": "4f2a5890-e0c0-11eb-8787-59040f6b2cc8"
                },
                "50554400-e0c0-11eb-8787-59040f6b2cc8": {
                    "friendUserName": "Sophie",
                    "userName": "Ruby",
                    "activity": "Accepted Friend Request",
                    "activityDate": 1625840215104,
                    "activityId": "50554400-e0c0-11eb-8787-59040f6b2cc8"
                },
                "58822941-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Liam",
                    "activity": "Friend request",
                    "activityDate": 1625840228820,
                    "activityId": "58822941-e0c0-11eb-8787-59040f6b2cc8"
                },
                "599ff551-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Logan",
                    "activity": "Friend request",
                    "activityDate": 1625840230693,
                    "activityId": "599ff551-e0c0-11eb-8787-59040f6b2cc8"
                },
                "5aac8351-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "friendUserName": "Sebby",
                    "activity": "Friend request",
                    "activityDate": 1625840232453,
                    "activityId": "5aac8351-e0c0-11eb-8787-59040f6b2cc8"
                }
            },
            "userCoverImage": "/img/defaultBg.2793204e.jpg",
            "userId": "964f7d30-db3a-11eb-af32-47b0df65ae76",
            "userProfileImage": "blob:http://localhost:8080/af7a90fb-4df5-4c9b-a9c1-1618db18d505"
        }
    },
    "allUsers": {
        "uche": {
            "userName": "uche",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "james": {
            "userName": "james",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ella"
                }
            ]
        },
        "bose": {
            "userName": "bose",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Ella"
                }
            ]
        },
        "chigo": {
            "userName": "chigo",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Olive"
                }
            ]
        },
        "chinedu": {
            "userName": "chinedu",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "john": {
            "userName": "john",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "Carter": {
            "userName": "Carter",
            "requestStatus": "Request Sent",
            "requests": [
                {
                    "userName": "Carter"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Smith"
                }
            ]
        },
        "Ethan": {
            "userName": "Ethan",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                }
            ]
        },
        "Josh": {
            "userName": "Josh",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                }
            ]
        },
        "Liam": {
            "userName": "Liam",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "Ella"
                },
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Chloe"
                },
                {
                    "userName": "Ada"
                }
            ]
        },
        "Logan": {
            "userName": "Logan",
            "requestStatus": "Request Sent",
            "requests": [
                {
                    "userName": "Ethan"
                },
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Ada"
                },
                {
                    "userName": "Smith"
                }
            ]
        },
        "Olive": {
            "userName": "Olive",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "Sebby": {
            "userName": "Sebby",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ruby"
                },
                {
                    "userName": "Olive"
                }
            ]
        },
        "Smith": {
            "userName": "Smith",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "Ada": {
            "userName": "Ada",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Olive"
                }
            ]
        },
        "Mia": {
            "userName": "Mia",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Olive"
                }
            ]
        },
        "Ava": {
            "userName": "Ava",
            "requestStatus": "Accept Request",
            "requests": [
                {
                    "userName": "Sophie"
                },
                {
                    "userName": "Olive"
                }
            ]
        },
        "Ella": {
            "userName": "Ella",
            "requestStatus": "Accept Request",
            "requests": []
        },
        "Chloe": {
            "userName": "Chloe",
            "requestStatus": "Add Friend",
            "requests": []
        },
        "Lily": {
            "userName": "Lily",
            "requestStatus": "Accept Request",
            "requests": []
        },
        "Nova": {
            "userName": "Nova",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Nova"
                },
                {
                    "userName": "Olive"
                }
            ]
        },
        "Ivy": {
            "userName": "Ivy",
            "requestStatus": "Add Friend",
            "requests": [
                {
                    "userName": "Ivy"
                },
                {
                    "userName": "Lily"
                },
                {
                    "userName": "Olive"
                }
            ]
        },
        "Sophie": {
            "userName": "Sophie",
            "requestStatus": "Accept Request",
            "requests": []
        },
        "Ruby": {
            "userName": "Ruby",
            "requestStatus": "Request Sent",
            "requests": [
                {
                    "userName": "Smith"
                }
            ]
        }
    },
    "newsFeed": {
        "55545651": {
            "userName": "john",
            "userId": "31",
            "postId": "55545651",
            "views": [
                "Ruby",
                "bose",
                "Ivy",
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postImages": [],
            "postVideos": {
                "videoUrl": "/media/vid2.449f8c87.mp4",
                "videoId": "55ddf6"
            },
            "datePosted": 1625074182031,
            "posts": "",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-themeThree",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "john",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "1xcfg": {
            "userName": "chigo",
            "userId": "21",
            "postId": "1xcfg",
            "postImages": [
                ""
            ],
            "postVideos": {},
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "datePosted": 1618065173905,
            "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-themeSeven",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "chigo",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "2": {
                    "userName": "uche",
                    "commentId": "2",
                    "dateCommented": 1618065175905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "3": {
                    "userName": "bose",
                    "commentId": "3",
                    "dateCommented": 1618065176905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "sfffgg2": {
            "userName": "uche",
            "userId": "31",
            "postId": "sfffgg2",
            "postImages": [],
            "postVideos": {},
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Liam",
                "Sebby"
            ],
            "datePosted": 1618065163905,
            "posts": "I just can't wait for tomorrow o, time please run fast o coz it gonna be my pretty moma birth anniversary, Dikko's favourite, Dikko's investment the only mamaG, inshort tomorrow first friends please get ready coz is gonna be parry after parry. Happy birthday in advance to you my Cute mumilo.",
            "likes": [
                "Ivy"
            ],
            "unLikes": [],
            "postStyle": "text-themeSeven",
            "posterComment": "",
            "comments": {
                "4": {
                    "userName": "chigo",
                    "commentId": "4",
                    "dateCommented": 1618065164905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "f3c789f0-db4c-11eb-abaf-9f6519f91aa1": {
                    "userName": "Ivy",
                    "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "comment": "happy birthday to your mom",
                    "dateCommented": 1625240911888,
                    "commentId": "f3c789f0-db4c-11eb-abaf-9f6519f91aa1",
                    "likes": [],
                    "postId": "sfffgg2",
                    "unLikes": []
                }
            }
        },
        "3sdaawf": {
            "userName": "chigo",
            "postId": "3sdaawf",
            "postImages": [],
            "postVideos": {},
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "datePosted": 1618065143905,
            "userId": "21",
            "posts": "life is good",
            "likes": [],
            "postStyle": "text-themeFour",
            "posterComment": "",
            "unLikes": [],
            "comments": {
                "5": {
                    "userName": "chigo",
                    "commentId": "5",
                    "dateCommented": 1618065145905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "6": {
                    "userName": "chigo",
                    "commentId": "6",
                    "dateCommented": 1618065146905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "4qrf": {
            "userName": "uche",
            "postId": "4qrf",
            "postImages": [],
            "postVideos": {},
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "datePosted": 1618065113905,
            "userId": "31",
            "posts": "try harder brother",
            "likes": [],
            "postStyle": "text-themeTwo",
            "posterComment": "",
            "unLikes": [],
            "comments": {
                "7": {
                    "userName": "chigo",
                    "commentId": "7",
                    "dateCommented": 1618065115905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "8": {
                    "userName": "chigo",
                    "commentId": "8",
                    "dateCommented": 1618064115905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "9": {
                    "userName": "chinedu",
                    "commentId": "9",
                    "dateCommented": 1618069993905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "565sd6": {
            "userName": "bose",
            "userId": "18",
            "postId": "565sd6",
            "postImages": [],
            "postVideos": {},
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "datePosted": 1619870462772,
            "posts": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-themeThree",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "john",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "2": {
                    "userName": "uche",
                    "commentId": "2",
                    "dateCommented": 1618065175905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "3": {
                    "userName": "bose",
                    "commentId": "3",
                    "dateCommented": 1618065176905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "12cv5699": {
            "userName": "uche",
            "userId": "31",
            "postId": "12cv5699",
            "views": [
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postImages": [
                {
                    "imageUrl": "/img/pic1.82e28376.jpeg",
                    "imageId": 22
                }
            ],
            "postVideos": {},
            "datePosted": 1625074182031,
            "posts": "",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-themeThree",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "john",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "2": {
                    "userName": "uche",
                    "commentId": "2",
                    "dateCommented": 1618065175905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                },
                "3": {
                    "userName": "bose",
                    "commentId": "3",
                    "dateCommented": 1618065176905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "555umk45651": {
            "userName": "uche",
            "userId": "31",
            "postId": "555umk45651",
            "views": [
                "Liam",
                "Lily",
                "Ruby",
                "bose",
                "Ivy",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive"
            ],
            "postImages": [],
            "postVideos": {
                "videoUrl": "/media/vid3.198918f4.mp4",
                "videoId": "55dffddf6",
                "videoAutoplay": false
            },
            "datePosted": 1625074182031,
            "posts": "",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-themeThree",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "john",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "555umk45ghgh651": {
            "userName": "chinedu",
            "userId": "31",
            "postId": "555umk45ghgh651",
            "views": [
                "Josh",
                "Liam",
                "Lily",
                "Nova",
                "Ruby",
                "bose",
                "Ivy",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Chloe",
                "Olive",
                "Sebby"
            ],
            "postImages": [],
            "postVideos": {
                "videoUrl": "/media/vid1.7ecbb091.mp4",
                "videoId": "55xx6rrt",
                "videoAutoplay": false
            },
            "datePosted": 1625074182031,
            "posts": "Me on a makeup class",
            "likes": [],
            "unLikes": [],
            "postStyle": "text-theme-default",
            "posterComment": "",
            "comments": {
                "1": {
                    "userName": "john",
                    "commentId": "1",
                    "dateCommented": 1618065174905,
                    "comment": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "likes": [],
                    "unLikes": []
                }
            }
        },
        "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e": {
            "userName": "Ivy",
            "userId": "5c8ef170-db3a-11eb-af32-47b0df65ae76",
            "views": [
                "Ivy",
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
            "datePosted": 1625328810454,
            "posts": "Hi Guys ,How was your day",
            "likes": [
                "Lily",
                "Nova",
                "Carter",
                "Sophie",
                "Chloe"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                    "userName": "Lily",
                    "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
                    "comment": "It was good and you dear?",
                    "dateCommented": 1625329024490,
                    "commentId": "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                    "likes": [
                        "Nova"
                    ],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "unLikes": []
                },
                "63fcd2b0-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
                    "comment": "nice and you",
                    "dateCommented": 1625673173851,
                    "commentId": "63fcd2b0-df3b-11eb-a210-09083f776f3d",
                    "likes": [],
                    "postId": "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                    "imageId": "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e"
                }
            ],
            "postVideos": {
                "videoUrl": "blob:http://localhost:8080/062feb16-95c9-4610-9adc-95482390d8fc",
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "e5b7c380-dc1d-11eb-b872-29eca492d404": {
            "userName": "Lily",
            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "e5b7c380-dc1d-11eb-b872-29eca492d404",
            "datePosted": 1625330653112,
            "posts": "My new Hair Style",
            "likes": [
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Sophie",
                "Chloe"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "533f6460-df3b-11eb-a210-09083f776f3d": {
                    "userName": "Nova",
                    "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
                    "comment": "I love your hair style",
                    "dateCommented": 1625673145766,
                    "commentId": "533f6460-df3b-11eb-a210-09083f776f3d",
                    "likes": [
                        "Carter",
                        "Sophie"
                    ],
                    "postId": "e5b7c380-dc1d-11eb-b872-29eca492d404",
                    "unLikes": []
                },
                "332110e0-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "userId": "5afc8710-db39-11eb-af32-47b0df65ae76",
                    "comment": " You are looking nice dear",
                    "dateCommented": 1625676527854,
                    "commentId": "332110e0-df43-11eb-a210-09083f776f3d",
                    "likes": [
                        "Sophie"
                    ],
                    "postId": "e5b7c380-dc1d-11eb-b872-29eca492d404",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/lily-post1.jpeg'),
                    "imageId": "e5b7c381-dc1d-11eb-b872-29eca492d404"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/lily-post1.jpeg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "68b3a730-df3f-11eb-a210-09083f776f3d": {
            "userName": "Nova",
            "userId": "3e29e050-db3a-11eb-af32-47b0df65ae76",
            "views": [
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
            "datePosted": 1625674899747,
            "posts": "My love for flowers    ❤❤❤❤💖💖💖💖",
            "likes": [
                "Nova",
                "Carter",
                "Mia",
                "Sophie",
                "Ethan",
                "Chloe"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "44371160-df41-11eb-a210-09083f776f3d": {
                    "userName": "Carter",
                    "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "I also love flowers 😊😊😊",
                    "dateCommented": 1625675697526,
                    "commentId": "44371160-df41-11eb-a210-09083f776f3d",
                    "likes": [
                        "Mia"
                    ],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "unLikes": []
                },
                "85737650-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Mia",
                    "userId": "5afc8710-db39-11eb-af32-47b0df65ae76",
                    "comment": "Me too🎉🎉🎉🎉",
                    "dateCommented": 1625680101941,
                    "commentId": "85737650-df4b-11eb-961c-b7b5c586ebc2",
                    "likes": [
                        "Sophie"
                    ],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "unLikes": []
                },
                "fa02d3c0-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "userId": "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "Nice",
                    "dateCommented": 1625833198332,
                    "commentId": "fa02d3c0-e0af-11eb-90ca-19effd8b5a00",
                    "likes": [],
                    "postId": "68b3a730-df3f-11eb-a210-09083f776f3d",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                    "imageId": "68b3a731-df3f-11eb-a210-09083f776f3d"
                }
            ],
            "postVideos": {
                "videoUrl": "blob:http://localhost:8080/ebfbee06-8c24-4a85-a463-99cd821e905d",
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "e90c98f0-df40-11eb-a210-09083f776f3d": {
            "userName": "Carter",
            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "e90c98f0-df40-11eb-a210-09083f776f3d",
            "datePosted": 1625675544575,
            "posts": "\"Working similar time frames with similar time break patterns has been helpful . I can be productive ,yet give myself permission to step away from home office guilt-free.\"\nNATHAN ELLERING",
            "likes": [
                "Carter",
                "Mia",
                "Sophie",
                "Ethan",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "58c94380-df43-11eb-a210-09083f776f3d": {
                    "userName": "Mia",
                    "userId": "5afc8710-db39-11eb-af32-47b0df65ae76",
                    "comment": "Hard work pays 👌👌",
                    "dateCommented": 1625676591032,
                    "commentId": "58c94380-df43-11eb-a210-09083f776f3d",
                    "likes": [
                        "Sophie",
                        "Ethan",
                        "Carter"
                    ],
                    "postId": "e90c98f0-df40-11eb-a210-09083f776f3d",
                    "unLikes": []
                },
                "ffdd9530-e0bb-11eb-bbed-5fb8923dc3e7": {
                    "userName": "Carter",
                    "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "Yes it does",
                    "dateCommented": 1625838362115,
                    "commentId": "ffdd9530-e0bb-11eb-bbed-5fb8923dc3e7",
                    "likes": [],
                    "postId": "e90c98f0-df40-11eb-a210-09083f776f3d",
                    "unLikes": []
                }
            },
            "postStyle": "text-themeNine",
            "postImages": [
                {
                    "imageUrl": "",
                    "imageId": "e90c98f1-df40-11eb-a210-09083f776f3d"
                }
            ],
            "postVideos": {
                "videoUrl": "",
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "d9341a20-df45-11eb-a210-09083f776f3d": {
            "userName": "Mia",
            "userId": "5afc8710-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "d9341a20-df45-11eb-a210-09083f776f3d",
            "datePosted": 1625677665474,
            "posts": "I love my smile 😁😁😁😍😍 ",
            "likes": [
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Carter",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "cbe536f0-df4b-11eb-961c-b7b5c586ebc2": {
                    "userName": "Ava",
                    "userId": "839d1220-db39-11eb-af32-47b0df65ae76",
                    "comment": "You have a beautiful smile😊😊👍",
                    "dateCommented": 1625680220128,
                    "commentId": "cbe536f0-df4b-11eb-961c-b7b5c586ebc2",
                    "likes": [],
                    "postId": "d9341a20-df45-11eb-a210-09083f776f3d",
                    "unLikes": []
                },
                "abf7e260-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "userId": "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "I love your smile💖💖",
                    "dateCommented": 1625833067398,
                    "commentId": "abf7e260-e0af-11eb-90ca-19effd8b5a00",
                    "likes": [],
                    "postId": "d9341a20-df45-11eb-a210-09083f776f3d",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/mia-post1.jpeg'),
                    "imageId": "d9341a21-df45-11eb-a210-09083f776f3d"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/mia-post1.jpeg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08": {
            "userName": "Ava",
            "userId": "839d1220-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Ava",
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08",
            "datePosted": 1625831193805,
            "posts": "On the Look 😎",
            "likes": [
                "Ava",
                "Ethan",
                "Ella",
                "Carter",
                "Sophie",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "8f0a2f00-e0af-11eb-90ca-19effd8b5a00": {
                    "userName": "Ethan",
                    "userId": "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "you look good dear😍",
                    "dateCommented": 1625833018864,
                    "commentId": "8f0a2f00-e0af-11eb-90ca-19effd8b5a00",
                    "likes": [],
                    "postId": "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/ava-post1.jpg'),
                    "imageId": "4f3847d1-e0ab-11eb-bcb8-25b2107d0c08"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/ava-post1.jpg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "7c498130-e0b0-11eb-90ca-19effd8b5a00": {
            "userName": "Ethan",
            "userId": "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby"
            ],
            "postId": "7c498130-e0b0-11eb-90ca-19effd8b5a00",
            "datePosted": 1625833416899,
            "posts": "Identical Me 🧑🧑",
            "likes": [
                "Ethan",
                "Ella",
                "Carter",
                "Sophie",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "e83d3580-e0b5-11eb-b9c1-cfb72beca659": {
                    "userName": "Ella",
                    "userId": "a7f5e160-db39-11eb-af32-47b0df65ae76",
                    "comment": "Handsome Boy",
                    "dateCommented": 1625835745496,
                    "commentId": "e83d3580-e0b5-11eb-b9c1-cfb72beca659",
                    "likes": [],
                    "postId": "7c498130-e0b0-11eb-90ca-19effd8b5a00",
                    "unLikes": []
                },
                "cfbd0e10-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "That's my guys 👍",
                    "dateCommented": 1625836992881,
                    "commentId": "cfbd0e10-e0b8-11eb-a091-bd97fb995f1d",
                    "likes": [],
                    "postId": "7c498130-e0b0-11eb-90ca-19effd8b5a00",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/ethan-post.jpg'),
                    "imageId": "7c498131-e0b0-11eb-90ca-19effd8b5a00"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/ethan-post.jpg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5": {
            "userName": "Ella",
            "userId": "a7f5e160-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh"
            ],
            "postId": "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
            "datePosted": 1625835810572,
            "posts": "",
            "likes": [
                "Ella",
                "Carter",
                "Ruby",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "aa587420-e0b8-11eb-a091-bd97fb995f1d": {
                    "userName": "Carter",
                    "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                    "comment": "Colorful fishes",
                    "dateCommented": 1625836930146,
                    "commentId": "aa587420-e0b8-11eb-a091-bd97fb995f1d",
                    "likes": [],
                    "postId": "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
                    "unLikes": []
                },
                "b9aa7db0-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "userId": "c5883930-db39-11eb-af32-47b0df65ae76",
                    "comment": "What is the name of this fish?",
                    "dateCommented": 1625851988235,
                    "commentId": "b9aa7db0-e0db-11eb-907b-171d7592562f",
                    "likes": [],
                    "postId": "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/225795819.sd.mp4?s=ff3df6f01140546ad5fcf8045dfffb3d4577fa22&profile_id=164&oauth2_token_id=57447761",
                "videoId": "0f0704c0-e0b6-11eb-bb52-d5cdf6bb26a5",
                "videoAutoplay": false
            }
        },
        "a55429a0-e0b9-11eb-b036-69cc37af9c61": {
            "userName": "Carter",
            "userId": "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh"
            ],
            "postId": "a55429a0-e0b9-11eb-b036-69cc37af9c61",
            "datePosted": 1625837351226,
            "posts": "BrainStorming",
            "likes": [
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "351b3410-e0c0-11eb-8787-59040f6b2cc8": {
                    "userName": "Ruby",
                    "userId": "964f7d30-db3a-11eb-af32-47b0df65ae76",
                    "comment": "Good 👍",
                    "dateCommented": 1625840169425,
                    "commentId": "351b3410-e0c0-11eb-8787-59040f6b2cc8",
                    "likes": [],
                    "postId": "a55429a0-e0b9-11eb-b036-69cc37af9c61",
                    "unLikes": []
                },
                "cae26770-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "userId": "7b154630-db3a-11eb-af32-47b0df65ae76",
                    "comment": "Worky work 😁😁😁",
                    "dateCommented": 1625840420711,
                    "commentId": "cae26770-e0c0-11eb-85f3-797226efa932",
                    "likes": [],
                    "postId": "a55429a0-e0b9-11eb-b036-69cc37af9c61",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/1683da8f-0290-4952-b59c-3a36d5065809",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/372311385.sd.mp4?s=10db1eeaefacd0080449547e02e3c13126cfebeb&profile_id=139&oauth2_token_id=57447761",
                "videoId": "a55429a1-e0b9-11eb-b036-69cc37af9c61",
                "videoAutoplay": false
            }
        },
        "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8": {
            "userName": "Ruby",
            "userId": "964f7d30-db3a-11eb-af32-47b0df65ae76",
            "views": [
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh"
            ],
            "postId": "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
            "datePosted": 1625840128328,
            "posts": "This is how sun sets over here❤",
            "likes": [
                "Sophie",
                "Chloe",
                "Ada",
                "Olive"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "bb25a040-e0c0-11eb-85f3-797226efa932": {
                    "userName": "Sophie",
                    "userId": "7b154630-db3a-11eb-af32-47b0df65ae76",
                    "comment": "It's beautiful to behold😍😍😍",
                    "dateCommented": 1625840394309,
                    "commentId": "bb25a040-e0c0-11eb-85f3-797226efa932",
                    "likes": [
                        "Olive"
                    ],
                    "postId": "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
                    "unLikes": []
                },
                "7a6cc360-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "userId": "c5883930-db39-11eb-af32-47b0df65ae76",
                    "comment": "Yellow Sun 😎",
                    "dateCommented": 1625851882134,
                    "commentId": "7a6cc360-e0db-11eb-907b-171d7592562f",
                    "likes": [],
                    "postId": "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/5dbed625-82f3-4962-b7c8-56c52dc29513",
                    "imageId": "1c9c4c81-e0c0-11eb-8787-59040f6b2cc8"
                }
            ],
            "postVideos": {
                "videoUrl": "blob:http://localhost:8080/5dbed625-82f3-4962-b7c8-56c52dc29513",
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "fc9c1710-e0c1-11eb-85f3-797226efa932": {
            "userName": "Sophie",
            "userId": "7b154630-db3a-11eb-af32-47b0df65ae76",
            "views": [
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh"
            ],
            "postId": "fc9c1710-e0c1-11eb-85f3-797226efa932",
            "datePosted": 1625840933633,
            "posts": "My girl killing it 💖💖",
            "likes": [
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "5b3fa750-e0db-11eb-907b-171d7592562f": {
                    "userName": "Chloe",
                    "userId": "c5883930-db39-11eb-af32-47b0df65ae76",
                    "comment": "She is a good dancer😘",
                    "dateCommented": 1625851829829,
                    "commentId": "5b3fa750-e0db-11eb-907b-171d7592562f",
                    "likes": [
                        "Ada",
                        "Olive"
                    ],
                    "postId": "fc9c1710-e0c1-11eb-85f3-797226efa932",
                    "unLikes": []
                },
                "922096e0-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "userId": "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
                    "comment": "Who can teach me how to dance? 🤦‍♀️🤦‍♀️🤦‍♂️",
                    "dateCommented": 1625933096782,
                    "commentId": "922096e0-e198-11eb-871f-0f966330432a",
                    "likes": [],
                    "postId": "fc9c1710-e0c1-11eb-85f3-797226efa932",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/ad4435a1-e3e8-4668-afed-42abbe85da15",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/386419950.sd.mp4?s=b1b36d5e58141a535d2fc104d284661d4b982c07&profile_id=139&oauth2_token_id=57447761",
                "videoId": "fc9c1711-e0c1-11eb-85f3-797226efa932",
                "videoAutoplay": false
            }
        },
        "70a248d0-e0dd-11eb-907b-171d7592562f": {
            "userName": "Chloe",
            "userId": "c5883930-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Smith",
                "Sebby",
                "Lily",
                "Josh"
            ],
            "postId": "70a248d0-e0dd-11eb-907b-171d7592562f",
            "datePosted": 1625852724701,
            "posts": "",
            "likes": [
                "Chloe",
                "Ada",
                "Olive",
                "Liam"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "6b27c860-e198-11eb-871f-0f966330432a": {
                    "userName": "Ada",
                    "userId": "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
                    "comment": "Beautiful Kids 😘😘😘",
                    "dateCommented": 1625933031398,
                    "commentId": "6b27c860-e198-11eb-871f-0f966330432a",
                    "likes": [
                        "Olive",
                        "Liam"
                    ],
                    "postId": "70a248d0-e0dd-11eb-907b-171d7592562f",
                    "unLikes": []
                },
                "6d6d5950-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "userId": "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
                    "comment": "Great kids 😊😊😊",
                    "dateCommented": 1625935182693,
                    "commentId": "6d6d5950-e19d-11eb-86e8-11fcf2392733",
                    "likes": [
                        "Liam"
                    ],
                    "postId": "70a248d0-e0dd-11eb-907b-171d7592562f",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                "videoId": "70a248d1-e0dd-11eb-907b-171d7592562f",
                "videoAutoplay": false
            }
        },
        "02ee58c0-e19a-11eb-871f-0f966330432a": {
            "userName": "Ada",
            "userId": "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
            "views": [
                "Ada",
                "Olive",
                "Liam",
                "Smith",
                "Sebby",
                "Lily",
                "Josh"
            ],
            "postId": "02ee58c0-e19a-11eb-871f-0f966330432a",
            "datePosted": 1625933715532,
            "posts": "",
            "likes": [
                "Ada",
                "Olive",
                "Smith",
                "Sebby"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "4f21c3a0-e19d-11eb-86e8-11fcf2392733": {
                    "userName": "Olive",
                    "userId": "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
                    "comment": "This is Nice👍",
                    "dateCommented": 1625935131866,
                    "commentId": "4f21c3a0-e19d-11eb-86e8-11fcf2392733",
                    "likes": [
                        "Liam"
                    ],
                    "postId": "02ee58c0-e19a-11eb-871f-0f966330432a",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/ada-post1.jpeg'),
                    "imageId": "02ee58c1-e19a-11eb-871f-0f966330432a"
                }
            ],
            "postVideos": {
                "videoUrl": "blob:http://localhost:8080/2920ec54-1363-432c-b59c-b99c7eb6690b",
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "77aac370-e26b-11eb-af05-7d0898d50a19": {
            "userName": "Olive",
            "userId": "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
            "views": [
                "Olive",
                "Liam",
                "Smith",
                "Sebby",
                "Lily",
                "Josh"
            ],
            "postId": "77aac370-e26b-11eb-af05-7d0898d50a19",
            "datePosted": 1626023676373,
            "posts": "On the set in New York with TY BREEZZYY , for a music video with Gordon Cowie Films.",
            "likes": [
                "Olive",
                "Liam",
                "Sebby",
                "Josh"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": [],
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/olive-post1.jpg'),
                    "imageId": "77c55050-e26b-11eb-af05-7d0898d50a19"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/olive-post1.jpg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "6aaff080-e26d-11eb-af05-7d0898d50a19": {
            "userName": "Liam",
            "userId": "b305d590-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Liam",
                "Smith",
                "Sebby",
                "Lily",
                "Josh"
            ],
            "postId": "6aaff080-e26d-11eb-af05-7d0898d50a19",
            "datePosted": 1626024513416,
            "posts": "Tonight's game is going to be serious.😁😁😁😁",
            "likes": [
                "Liam",
                "Smith",
                "Sebby",
                "Lily"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "33a28a20-e2aa-11eb-af05-7d0898d50a19": {
                    "userName": "Smith",
                    "userId": "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
                    "comment": "😁😁😁",
                    "dateCommented": 1626050620354,
                    "commentId": "33a28a20-e2aa-11eb-af05-7d0898d50a19",
                    "likes": [
                        "Smith",
                        "Josh"
                    ],
                    "postId": "6aaff080-e26d-11eb-af05-7d0898d50a19",
                    "unLikes": []
                },
                "8a281180-e32c-11eb-a03f-b542039adbaa": {
                    "userName": "Sebby",
                    "userId": "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
                    "comment": "Yah, you are on point 👍",
                    "dateCommented": 1626106600088,
                    "commentId": "8a281180-e32c-11eb-a03f-b542039adbaa",
                    "likes": [
                        "Josh"
                    ],
                    "postId": "6aaff080-e26d-11eb-af05-7d0898d50a19",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                "videoId": "6aaff081-e26d-11eb-af05-7d0898d50a19",
                "videoAutoplay": false
            }
        },
        "8eb120b0-e2ab-11eb-8a39-b39ebfa4685e": {
            "userName": "Smith",
            "userId": "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
            "views": [
                "Smith",
                "Sebby",
                "Lily",
                "Josh",
                "Logan"
            ],
            "postId": "8eb120b0-e2ab-11eb-8a39-b39ebfa4685e",
            "datePosted": 1626051202620,
            "posts": "",
            "likes": [
                "Smith",
                "Sebby",
                "Lily",
                "Josh"
            ],
            "unLikes": [],
            "posterComment": "Good, south African dancers ",
            "comments": [],
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                "videoId": "8eb120b1-e2ab-11eb-8a39-b39ebfa4685e",
                "videoAutoplay": false
            }
        },
        "0cee6450-e32f-11eb-a03f-b542039adbaa": {
            "userName": "Lily",
            "userId": "df512cf0-db39-11eb-af32-47b0df65ae76",
            "views": [
                "Lily",
                "Sebby",
                "Josh",
                "Liam",
                "Logan"
            ],
            "postId": "0cee6450-e32f-11eb-a03f-b542039adbaa",
            "datePosted": 1626107678485,
            "posts": "Good morning Guys, who will join me for a morning stretch exercise 🦾",
            "likes": [
                "Sebby",
                "Josh",
                "Logan"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": {
                "3d053960-e330-11eb-97fc-8d90948c2e0c": {
                    "userName": "Sebby",
                    "userId": "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
                    "comment": "I am in 🖐",
                    "dateCommented": 1626108188663,
                    "commentId": "3d053960-e330-11eb-97fc-8d90948c2e0c",
                    "likes": [
                        "Josh"
                    ],
                    "postId": "0cee6450-e32f-11eb-a03f-b542039adbaa",
                    "unLikes": []
                }
            },
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "blob:http://localhost:8080/3b4c8f82-83ab-4390-8e38-862d3e9f2050",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/403279369.sd.mp4?s=3bb6b5b9a228a15a1e3ec175c8c1ee78a8c876d2&profile_id=139&oauth2_token_id=57447761",
                "videoId": "0cee6451-e32f-11eb-a03f-b542039adbaa",
                "videoAutoplay": false
            }
        },
        "2a34c230-e333-11eb-97fc-8d90948c2e0c": {
            "userName": "Logan",
            "userId": "e8ff6e40-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Logan",
                "Sebby",
                "Josh"
            ],
            "postId": "2a34c230-e333-11eb-97fc-8d90948c2e0c",
            "datePosted": 1626109445587,
            "posts": "",
            "likes": [],
            "unLikes": [],
            "posterComment": "",
            "comments": [],
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": require('../assets/postImages/logan-post1.jpeg'),
                    "imageId": "2a34c231-e333-11eb-97fc-8d90948c2e0c"
                }
            ],
            "postVideos": {
                "videoUrl": require('../assets/postImages/logan-post1.jpeg'),
                "videoId": "",
                "videoAutoplay": false
            }
        },
        "29166f00-e335-11eb-97fc-8d90948c2e0c": {
            "userName": "Sebby",
            "userId": "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
            "views": [
                "Sebby",
                "Josh"
            ],
            "postId": "29166f00-e335-11eb-97fc-8d90948c2e0c",
            "datePosted": 1626110302704,
            "posts": "Winter Riding fun with Snowmobile 😎",
            "likes": [
                "Sebby",
                "Josh"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": [],
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                "videoId": "29166f01-e335-11eb-97fc-8d90948c2e0c",
                "videoAutoplay": false
            }
        },
        "92a3b200-e337-11eb-97fc-8d90948c2e0c": {
            "userName": "Josh",
            "userId": "89045af0-d9c9-11eb-ba8c-e9a262a433df",
            "views": [
                "Josh"
            ],
            "postId": "92a3b200-e337-11eb-97fc-8d90948c2e0c",
            "datePosted": 1626111338784,
            "posts": "The party is on",
            "likes": [
                "Josh"
            ],
            "unLikes": [],
            "posterComment": "",
            "comments": [],
            "postStyle": "text-theme-default",
            "postImages": [
                {
                    "imageUrl": "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                    "imageId": ""
                }
            ],
            "postVideos": {
                "videoUrl": "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                "videoId": "92a3b201-e337-11eb-97fc-8d90948c2e0c",
                "videoAutoplay": false
            }
        }
    }
},
    mutations: {
        handleLogin(state, payLoad) {
            state.users[payLoad.userName].status = payLoad.status;
            state.userData = state.users[payLoad.userName];
        },

        updateUserData(state, payLoad) {
            const userName = Object.keys(payLoad)[0];
            if (userName === "Guest") {
                state.userData = payLoad[userName]

            } else {
                state.userData = state.users[userName];

            }
        },

        handleAddAccount(state, payLoad) {
            const userName = Object.keys(payLoad)[0];
            state.user = payLoad;
            state.users = {...state.users, ...state.user };
            state.userData = payLoad[userName];

            state.allUsers = {
                ...state.allUsers,
                [userName]: {
                    userName,
                    requestStatus: 'Add Friend',
                    requests: []
                }
            };
        },

        handlePublishPost(state, payLoad) {
            const userName = Object.keys(payLoad)[0];
            state.newsFeed = {...state.newsFeed, ...payLoad };
            // state.users[payLoad[userName].userName].posts = {...state.users[payLoad[userName].userName].posts, ...payLoad }
        },

        handlePosterComment(state, payLoad) {
            const commentId = Object.keys(payLoad)[0];
            state.newsFeed[payLoad[commentId].postId].comments = {
                ...state.newsFeed[payLoad[commentId].postId].comments,
                ...payLoad
            };
            state.newsFeed[payLoad[commentId].postId].posterComment = '';
        },

        handleLikes(state, payLoad) {
            switch (payLoad.condition) {
                case 'postLikes':
                    const indexLikes = state.newsFeed[payLoad.postId].likes.indexOf(payLoad.userName);
                    const indexUnikes = state.newsFeed[payLoad.postId].unLikes.indexOf(payLoad.userName);
                    if (payLoad.params === 'incrementPostLikes') {
                        if (state.newsFeed[payLoad.postId].likes.indexOf(payLoad.userName) < 0) {
                            state.newsFeed[payLoad.postId].likes.push(payLoad.userName);
                            state.newsFeed[payLoad.postId].unLikes.splice(indexUnikes, 1);
                        } else {
                            state.newsFeed[payLoad.postId].likes.splice(indexLikes, 1);
                        }
                    } else {
                        if (state.newsFeed[payLoad.postId].unLikes.indexOf(payLoad.userName) < 0) {
                            state.newsFeed[payLoad.postId].unLikes.push(payLoad.userName);
                            state.newsFeed[payLoad.postId].likes.splice(indexLikes, 1);
                        } else {
                            state.newsFeed[payLoad.postId].unLikes.splice(indexUnikes, 1);
                        }
                    }
                    break;

                case 'commentLikes':
                    const indexCommentLikes = state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.indexOf(
                        payLoad.userName
                    );
                    const indexCommentUnikes = state.newsFeed[payLoad.postId].comments[
                        payLoad.commentId
                    ].unLikes.indexOf(payLoad.userName);
                    if (payLoad.params === 'incrementCommentLikes') {
                        if (
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.indexOf(payLoad.userName) < 0
                        ) {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.push(payLoad.userName);
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.splice(
                                indexCommentUnikes,
                                1
                            );
                        } else {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.splice(
                                indexCommentLikes,
                                1
                            );
                        }
                    } else {
                        if (
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.indexOf(payLoad.userName) <
                            0
                        ) {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.push(payLoad.userName);
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.splice(
                                indexCommentLikes,
                                1
                            );
                        } else {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.splice(
                                indexCommentUnikes,
                                1
                            );
                        }
                    }
                    break;

                default:
                    break;
            }
        },

        handleSubmitMessage(state, payLoad) {
            const userName = payLoad[Object.keys(payLoad)[0]].userName;
            const friendMessaged = payLoad[Object.keys(payLoad)[0]].friendMessaged;
            const messsageData = {
                userName,
                messageId: payLoad[Object.keys(payLoad)[0]].messageId,
                message: payLoad[Object.keys(payLoad)[0]].message,
                messageDate: payLoad[Object.keys(payLoad)[0]].messageDate,
                messageStatus: payLoad[Object.keys(payLoad)[0]].messageStatus
            };

            state.users[userName].messages[friendMessaged] = {
                ...state.users[userName].messages[friendMessaged],
                [messsageData.messageId]: {...messsageData }
            };

            state.users[friendMessaged].messages[userName] = {
                ...state.users[friendMessaged].messages[userName],
                [messsageData.messageId]: {...messsageData }
            };







        },

        handleDeleteMessage(state, payLoad) {
            delete state.users[payLoad.userName].messages[payLoad.friendMessaged][payLoad.messageId];
        },


        handleMessageStatus(state, payLoad) {
            for (const userName in state.users) {
                for (const messageUserName in state.users[userName].messages) {
                    if (messageUserName === payLoad.userName && userName !== payLoad.userName) {
                        for (const messageId in state.users[userName].messages[messageUserName]) {
                            if (
                                state.users[userName].messages[messageUserName][messageId].userName !== payLoad.userName
                            ) {
                                if (
                                    state.users[userName].messages[messageUserName][messageId].messageStatus === 'sent'
                                ) {
                                    state.users[userName].messages[messageUserName][messageId].messageStatus =
                                        'received';
                                    state.users[payLoad.userName].messages[userName][messageId].messageStatus =
                                        'received';

                                }
                            }
                        }

                    }
                }


            }

        },



        handleMessageViewStatus(state, payLoad) {
            for (const messageId in state.users[payLoad.friendMessaged].messages[payLoad.userName]) {
                if (
                    state.users[payLoad.friendMessaged].messages[payLoad.userName][messageId].userName ===
                    payLoad.friendMessaged
                ) {

                    state.users[payLoad.friendMessaged].messages[payLoad.userName][messageId].messageStatus = 'Read';
                    state.users[payLoad.userName].messages[payLoad.friendMessaged][messageId].messageStatus = 'Read';

                }
            }

            for (const showMessage in state.users[payLoad.userName].messageStatus) {
                state.users[payLoad.userName].messageStatus[showMessage].showMessage = false;
            }

            if (payLoad.messageViewStatus === 'Read') {
                for (const messageStatusId in state.users[payLoad.userName].messageStatus) {
                    state.users[payLoad.userName].messageStatus[messageStatusId].messageOnScreen = payLoad.messageOnScreen;
                }

                state.users[payLoad.userName].messageStatus = {
                    ...state.users[payLoad.userName].messageStatus,
                    [payLoad.friendMessaged]: {
                        friendMessaged: payLoad.friendMessaged,
                        userName: payLoad.userName,
                        messageOnScreen: payLoad.messageOnScreen,
                        messageViewStatus: payLoad.messageViewStatus,
                        messageDate: Date.now(),
                        showMessage: true
                    }
                };
            } else {
                state.users[payLoad.friendMessaged].messageStatus = {
                    ...state.users[payLoad.friendMessaged].messageStatus,
                    [payLoad.userName]: {
                        friendMessaged: payLoad.userName,
                        userName: payLoad.userName,
                        messageOnScreen: false,
                        messageViewStatus: payLoad.messageViewStatus,
                        messageDate: Date.now(),
                        showMessage: true
                    }
                };
                state.users[payLoad.userName].messageStatus = {
                    ...state.users[payLoad.userName].messageStatus,
                    [payLoad.friendMessaged]: {
                        friendMessaged: payLoad.friendMessaged,
                        userName: payLoad.userName,
                        messageOnScreen: true,
                        messageViewStatus: 'read',
                        messageDate: Date.now(),
                        showMessage: true
                    }
                };
            }
        },



        handleFriendRequest(state, payLoad) {
            if (payLoad.requestStatus === 'Request Sent') {
                state.allUsers[payLoad.friendUserName].requests = [
                    ...state.allUsers[payLoad.friendUserName].requests,
                    { userName: payLoad.userName }
                ];
            } else {
                state.users[payLoad.userName].friends = [
                    ...state.users[payLoad.userName].friends,
                    { userName: payLoad.friendUserName }
                ];
                state.users[payLoad.friendUserName].friends = [
                    ...state.users[payLoad.friendUserName].friends,
                    { userName: payLoad.userName }
                ];
                state.allUsers[payLoad.userName].requests = state.allUsers[payLoad.userName].requests.filter(
                    (user) => user.userName !== payLoad.friendUserName
                );
            }
        },

        handleFollow(state, payLoad) {
            if (payLoad.followState === 'follow') {
                state.users[payLoad.userName].following = [
                    ...state.users[payLoad.userName].following,
                    { userName: payLoad.friendUserName }
                ];

                return (state.users[payLoad.friendUserName].followers = [
                    ...state.users[payLoad.friendUserName].followers,
                    { userName: payLoad.userName }
                ]);
            }
            state.users[payLoad.userName].following = state.users[payLoad.userName].following.filter(
                (userName) => userName.userName !== payLoad.friendUserName
            );
            return (state.users[payLoad.friendUserName].followers = state.users[
                payLoad.friendUserName
            ].followers.filter((userName) => userName.userName !== payLoad.userName));
        },

        handleCancelFriendRequest(state, payLoad) {
            state.allUsers[payLoad.userName].requests = state.allUsers[payLoad.userName].requests.filter(
                (user) => user.userName !== payLoad.friendUserName
            );
            state.allUsers[payLoad.userName].requestStatus = 'Add Friend';
        },

        handleNotifications(state, payLoad) {
            switch (payLoad.notificationType) {
                case 'post':
                    if (state.users[payLoad.userName].friends.length) {
                        state.users[payLoad.userName].friends.forEach((friend) => {
                            state.users[friend.userName].notifications = {
                                ...state.users[friend.userName].notifications,
                                [payLoad.notificationId]: {...payLoad }
                            };
                        });
                    }
                    break;

                case 'friend request':
                    state.users[payLoad.friendUserName].notifications = {
                        ...state.users[payLoad.friendUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };

                    break;

                case 'message':
                    state.users[payLoad.friendUserName].notifications = {
                        ...state.users[payLoad.friendUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };

                    break;

                case 'likes':
                    state.users[payLoad.posterUserName].notifications = {
                        ...state.users[payLoad.posterUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };
                    state.users[payLoad.userName].friends.forEach((friend) => {
                        state.users[friend.userName].notifications = {
                            ...state.users[friend.userName].notifications,
                            [payLoad.notificationId]: {...payLoad }
                        };
                    });

                    break;

                case 'likedComment':
                    state.users[payLoad.posterUserName].notifications = {
                        ...state.users[payLoad.posterUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };
                    state.users[payLoad.userName].friends.forEach((friend) => {
                        state.users[friend.userName].notifications = {
                            ...state.users[friend.userName].notifications,
                            [payLoad.notificationId]: {...payLoad }
                        };
                    });

                    break;

                case 'comment':
                    if (payLoad.posterUserName !== payLoad.posterUserName) {
                        state.users[payLoad.posterUserName].notifications = {
                            ...state.users[payLoad.posterUserName].notifications,
                            [payLoad.notificationId]: {...payLoad }
                        };
                    }
                    state.users[payLoad.userName].friends.forEach((friend) => {
                        state.users[friend.userName].notifications = {
                            ...state.users[friend.userName].notifications,
                            [payLoad.notificationId]: {...payLoad }
                        };
                    });
                    break;

                case 'follow':
                    state.users[payLoad.friendUserName].notifications = {
                        ...state.users[payLoad.friendUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };

                    break;
                case 'Accepted Friend Request':
                    state.users[payLoad.friendUserName].notifications = {
                        ...state.users[payLoad.friendUserName].notifications,
                        [payLoad.notificationId]: {...payLoad }
                    };

                    break;

                default:
                    break;
            }
        },

        handleNotificationUpdate(state, payLoad) {
            for (const notificationsId in state.users[payLoad.userName].notifications) {
                if (
                    state.users[payLoad.userName].notifications[notificationsId].notificationType ===
                    payLoad.notificationType
                ) {
                    state.users[payLoad.userName].notifications[notificationsId].notificationStatus = 'Read';
                }
            }
        },

        handleActivities(state, payLoad) {
            state.users[payLoad.userName].activities = {
                ...state.users[payLoad.userName].activities,
                [payLoad.activityId]: {...payLoad }
            };
        },
        handlePostViews(state, payLoad) {
            if (!state.newsFeed[payLoad.postId].views.includes(payLoad.userName)) {
                state.newsFeed[payLoad.postId].views = [...state.newsFeed[payLoad.postId].views, payLoad.userName]
            }
        },

        handleDisplayFunctions(state, payLoad) {
            switch (payLoad.params) {
                case 'collapseNav':
                    state.displayFunctions.navCollapsed = payLoad.navCollapsed;
                    break;

                case 'loginPageUnMount':
                    state.displayFunctions.loginPageUnmounted = payLoad.loginPageUnmounted;

                    break;

                case 'displayClickedImage':
                    state.displayFunctions.displayClickedImage = payLoad.displayClickedImage;

                    break;
                case 'activeLink':
                    state.displayFunctions.activeLink = payLoad.activeLink;

                    break;
                case 'displayMessage':
                    state.displayFunctions.displayMessage.userName = payLoad.userName;

                    break;

                case 'footerOnScreen':
                    state.displayFunctions.footerOnScreen = payLoad.footerOnScreen;

                    break;
                case 'photosCompOnScreen':
                    state.displayFunctions.photosCompOnScreen = payLoad.photosCompOnScreen;

                    break;

                case 'componentMounted':
                    state.displayFunctions.componentMounted = payLoad.componentMounted;

                    break;

                    // case 'pageReLoad':
                    //     state.displayFunctions.pageReLoad = payLoad.pageReLoad;

                    //     break;

                default:
                    break;
            }
        },

        handleAccountUpdate(state, payLoad) {
            switch (payLoad.params) {
                case 'updateProfileImage':
                    state.users[payLoad.userName].userProfileImage = payLoad.userProfileImage;

                    break;

                case 'updateCoverImage':
                    state.users[payLoad.userName].userCoverImage = payLoad.userCoverImage;

                    break;
                case 'otherDetails':
                    state.users[payLoad.userName] = {...state.users[payLoad.userName], ...payLoad.userDetails };
                    break;

                case 'updateUserName':
                    state.users = {...state.users, [payLoad.userDetails.userName]: {...payLoad.userDetails } };
                    for (let userName in state.users) {
                        for (let messagestatusUserName in state.users[userName].messageStatus) {
                            if (state.users[userName].messageStatus[messagestatusUserName].userName === payLoad.userName) {
                                state.users[userName].messageStatus[messagestatusUserName].userName = payLoad.userDetails.userName


                            }
                            if (messagestatusUserName === payLoad.userName) {
                                state.users[userName].messageStatus[messagestatusUserName].friendMessaged =
                                    payLoad.userDetails.userName;
                                state.users[userName].messageStatus = {
                                    ...state.users[userName].messageStatus,
                                    [payLoad.userDetails.userName]: {
                                        ...state.users[userName].messageStatus[messagestatusUserName]
                                    }
                                };

                                delete state.users[userName].messageStatus[messagestatusUserName];
                            }





                        }

                        for (let messsageUserName in state.users[userName].messages) {
                            if (messsageUserName === payLoad.userName) {

                                for (let messsageUserId in state.users[userName].messages[messsageUserName]) {
                                    if (
                                        state.users[userName].messages[messsageUserName][messsageUserId].userName ===
                                        payLoad.userName
                                    ) {
                                        state.users[userName].messages[messsageUserName][messsageUserId].userName =
                                            payLoad.userDetails.userName;
                                    }
                                }
                                state.users[userName].messages = {...state.users[userName].messages, [payLoad.userDetails.userName]: {...state.users[userName].messages[messsageUserName] } }

                                delete state.users[userName].messages[messsageUserName];


                            }
                        }

                        state.users[userName].friends.forEach(user => {
                            if (user.userName === payLoad.userName) {
                                user.userName = payLoad.userDetails.userName


                            }
                        });


                        state.users[userName].followers.forEach(user => {
                            if (user.userName === payLoad.userName) {
                                user.userName = payLoad.userDetails.userName


                            }
                        });


                        state.users[userName].following.forEach(user => {
                            if (user.userName === payLoad.userName) {
                                user.userName = payLoad.userDetails.userName


                            }
                        });


                    }

                    for (let userName in state.allUsers) {
                        if (state.allUsers[userName].userName === payLoad.userName) {

                            state.allUsers[userName].userName = payLoad.userDetails.userName

                        }
                        state.allUsers[userName].requests.forEach(user => {
                            if (user.userName === payLoad.userName)
                                user.userName = payLoad.userDetails.userName
                        });

                        if (userName === payLoad.userName) {
                            state.allUsers = {...state.allUsers,
                                [payLoad.userDetails.userName]: {...state.allUsers[userName]
                                }
                            }


                            delete state.allUsers[userName]

                        }



                    }
                    for (let feedId in state.newsFeed) {
                        if (state.newsFeed[feedId].userName === payLoad.userName) {

                            state.newsFeed[feedId].userName = payLoad.userDetails.userName

                        }

                        for (let commentId in state.newsFeed[feedId].comments) {
                            if (state.newsFeed[feedId].comments[commentId].userName === payLoad.userName) {
                                state.newsFeed[feedId].comments[commentId].userName = payLoad.userDetails.userName
                            }
                        }

                    }

                    state.userData = state.users[payLoad.userDetails.userName];


                    setTimeout(() => {
                        delete state.users[payLoad.userName]

                    }, 1000);




                    break;

                default:
                    break;
            }
        },


        handleAddImageVideo(state, payLoad) {

            if (payLoad.fileType === "image") {

                state.users[payLoad.userName].photos = [...state.users[payLoad.userName].photos, { imageUrl: payLoad.imageUrl, imageId: payLoad.imageId }]


            } else {
                state.users[payLoad.userName].videos = [...state.users[payLoad.userName].videos, { videoUrl: payLoad.videoUrl, videoId: payLoad.videoId, videoAutoplay: false }]


            }


        },
        handleUpdateLocalStorage(state, payLoad) {

            switch (payLoad.params) {
                case "loadData":
                    localStorage.state = JSON.stringify(state)
                    break;
                case "updateData":

                    localStorage.state = JSON.stringify(state)


                    break;
                case "retrieveData":
                    let localState = JSON.parse(localStorage.state)
                    for (let stateKey in state) {
                        if (stateKey !== "userData") {
                            state[stateKey] = localState[stateKey]
                        }

                    }
                    break;

                default:
                    break;
            }
            console.log(JSON.parse(localStorage.state))
        },



    },

    actions: {
        handleAddAccount(context, payLoad) {
            context.commit('handleAddAccount', payLoad);
        },

        handlePublishPost(context, payLoad) {
            context.commit('handlePublishPost', payLoad);
        },

        handleLikes(context, payLoad) {
            context.commit('handleLikes', payLoad);
        },

        handlePosterComment(context, payLoad) {
            context.commit('handlePosterComment', payLoad);
        },
        handleLogin(context, payLoad) {
            context.commit('handleLogin', payLoad);
        },
        updateUserData(context, payLoad) {
            context.commit('updateUserData', payLoad);
        },

        handleSubmitMessage(context, payLoad) {
            context.commit('handleSubmitMessage', payLoad);
        },
        handleDeleteMessage(context, payLoad) {
            context.commit('handleDeleteMessage', payLoad);
        },
        handleMessageViewStatus(context, payLoad) {
            context.commit('handleMessageViewStatus', payLoad);
        },
        handleMessageStatus(context, payLoad) {
            context.commit('handleMessageStatus', payLoad);
        },
        handleFriendRequest(context, payLoad) {
            context.commit('handleFriendRequest', payLoad);
        },

        handleCancelFriendRequest(context, payLoad) {
            context.commit('handleCancelFriendRequest', payLoad);
        },
        handleNotifications(context, payLoad) {
            context.commit('handleNotifications', payLoad);
        },
        handleNotificationUpdate(context, payLoad) {
            context.commit('handleNotificationUpdate', payLoad);
        },
        handleFollow(context, payLoad) {
            context.commit('handleFollow', payLoad);
        },

        handleActivities(context, payLoad) {
            context.commit('handleActivities', payLoad);
        },
        handlePostViews(context, payLoad) {
            context.commit('handlePostViews', payLoad);
        },
        handleDisplayFunctions(context, payLoad) {
            context.commit('handleDisplayFunctions', payLoad);
        },
        handleAccountUpdate(context, payLoad) {
            context.commit('handleAccountUpdate', payLoad);
        },
        handleAddImageVideo(context, payLoad) {
            context.commit('handleAddImageVideo', payLoad);
        },
        handleUpdateChatList(context, payLoad) {
            context.commit('handleUpdateChatList', payLoad);
        },
        handleUpdateLocalStorage(context, payLoad) {
            context.commit('handleUpdateLocalStorage', payLoad);
        },


    },



    modules: {}
});
