import { createStore } from 'vuex'
import { uuid } from 'vue-uuid';

export default createStore({

    state: {

        userData: {
            userName: "uche",
            userId: "419",
            firstName: "Guest",
            lastName: "Guest",
            address: "Guest",
            userThumbnail: require('../assets/userThumbnail/original1.jpg'),
            gender: 'female',

            emailAddress: "Guest@gmail.com",
            postCode: "Guest",
            country: "Guest",
            city: "Guest",
            aboutMe: "Guest",
            password: "Guest",
            occupation: "Guest",
            education: "Guest",
            age: "27",

            status: 'offline',
            messages: [],
            posts: {
                Guest: {
                    likes: ["Guest"],
                    unLikes: ["Guest"],
                }
            },
            followers: ["Guest"],
            following: ["Guest"],
            friends: ["Guest"],

            posterComment: "",
            comments: {
                likes: [],
                unLikes: [],
                notifications: {
                    friendRequest: [],

                }


            }
        },









        user: {},
        users: {
            "Guest": {
                userName: "Guest",
                userId: "419",
                userThumbnail: require('../assets/userThumbnail/original1.jpg'),

                firstName: "Guest",
                lastName: "Guest",
                address: "Guest",
                gender: 'female',
                emailAddress: "Guest@gmail.com",
                postCode: "Guest",
                country: "Guest",
                city: "Guest",
                aboutMe: "Guest",
                password: "Guest",
                occupation: "Guest",
                education: "Guest",
                age: "27",

                status: 'offline',
                messages: [],
                posts: {
                    Guest: {
                        likes: ["Guest"],
                        unLikes: ["Guest"],
                    }
                },
                followers: ["Guest"],
                following: ["Guest"],
                friends: ["Guest"],

                posterComment: "",
                comments: {
                    likes: [],
                    unLikes: [],
                    notifications: {
                        friendRequest: [],

                    }


                }
            },










            uche: {
                userName: 'uche',
                gender: 'male',

                emailAddress: 'uche@gmail.com',
                password: 'uche',
                userId: '31',
                firstName: '',
                lastName: '',
                address: '',
                userThumbnail: 'https://zsuttonphoto.com/wp-content/uploads/2018/06/Beauty-Photography-In-LA-2.jpg',
                postCode: '',
                country: '',
                city: '',
                aboutMe: '',
                status: 'offline',
                messages: {
                    chigo: {
                        '55666': {
                            userName: 'chigo',
                            messageId: '55666',
                            messageStatus: 'sent',
                            messageDate: 1618050881819,
                            message: 'good day boss',
                        },
                        '55668': {
                            userName: 'uche',
                            messageId: '55668',
                            messageStatus: 'sent',
                            messageDate: 1618060881819,
                            message: 'how are u bro',
                        },
                        '4752': {
                            userName: 'chigo',
                            messageId: '4752',
                            messageStatus: 'sent',
                            messageDate: 1618065193922,
                            message: 'i am fine and you',


                        },


                        23335: {
                            userName: 'uche',
                            messageId: '23335',
                            messageStatus: 'sent',
                            messageDate: 1618065881819,
                            message: 'am good',
                        },
                    },
                    bose: {
                        522333:

                        {
                            userName: 'bose',
                            messageId: '522333',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'hello',
                        },
                        85426: {
                            userName: 'uche',
                            messageId: '85426',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            message: 'hi,how are you',
                        },
                        '236541': {
                            userName: 'bose',
                            messageId: '236541',
                            messageStatus: 'sent',
                            messageDate: 1618065193000,
                            message: 'i am fine',


                        },


                        1233658: {
                            userName: 'uche',
                            messageId: '1233658',
                            messageStatus: 'sent',
                            messageDate: 1618065190000,
                            message: 'its good to meet you',
                        },
                    },

                },
                messageStatus: {
                    'chigo': {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'uche',
                        friendMessaged: 'chigo',
                        showMessage: "off",
                    },

                    'bose': {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'uche',
                        friendMessaged: 'bose',
                        showMessage: "on",
                    },



                },
                posts: [],
                activities: {},
                followers: [{ userName: 'chigo', userId: '21' }, { userName: 'chinedu', userId: '25' }, ],
                following: [{ userName: 'uche', userId: '31' }, { userName: 'bose', userId: '18' }, ],
                friends: [{ userName: 'chinedu', userId: '25' }, ],
                notifications: {


                }
            },
            bose: {
                userName: 'bose',
                gender: 'female',
                userThumbnail: 'https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png',
                emailAddress: 'bose@gmail.com',
                password: 'bose',
                userId: '18',
                status: 'offline',
                messages: {
                    uche: {
                        522333:

                        {
                            userName: 'bose',
                            messageId: '522333',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'hello',
                        },
                        85426: {
                            userName: 'uche',
                            messageId: '85426',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            message: 'hi,how are you',
                        },
                        '236541': {
                            userName: 'bose',
                            messageId: '236541',
                            messageStatus: 'sent',
                            messageDate: 1618065193905,
                            message: 'i am fine',


                        },


                        1233658: {
                            userName: 'uche',
                            messageId: '1233658',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'its good to meet you',
                        },
                    },
                    chigo: {
                        54452:

                        {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193555,
                            messageId: 54452,
                            message: 'work work work',

                        },
                        8856: {
                            userName: 'bose',
                            messageStatus: 'sent',
                            messageDate: 1618065193455,
                            messageId: 8856,
                            message: 'this is life for you',
                        },
                        5564: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193135,
                            messageId: 5564,
                            message: 'life is good',


                        },


                        8856: {
                            userName: 'bose',
                            messageStatus: 'sent',
                            messageDate: 1618065197268,
                            messageId: 8856,
                            message: 'try harder brother',
                        },
                    }
                },
                messageStatus: {
                    chigo: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'bose',
                        friendMessaged: 'chigo',
                        showMessage: "on",
                    },
                    uche: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'bose',
                        friendMessaged: 'uche',
                        showMessage: "off",
                    },

                },
                posts: [],
                activities: { 6155545: { userName: "bose", activityId: 6155545, activity: "posted", activityDate: 1618065197268 } },
                followers: [{ userName: 'uche', userId: '31' }, { userName: 'chinedu', userId: '25' }],
                following: [{ userName: 'uche', userId: '31' }, { userName: 'chinedu', userId: '25' }, ],
                friends: [{ userName: 'chigo', userId: '31'},{userName:"uche"}],



                notifications: {
                    45262: { userName: "uche", notificationType: "friend request", notificationId: "45262", notificationStatus: "unRead", notificationDate: 1618065197268 },
                    4526522: { userName: "uche", notificationType: "message", notificationId: "4526522", notificationStatus: "unRead", notificationDate: 1618065197268 },
                    26266: { userName: "chigo", notificationType: "comment", posterUserName: "uche", notificationStatus: "unRead", notificationDate: 1618065197268 },
                    26265206: { userName: "chigo", notificationType: "likes", posterUserName: "uche", notificationStatus: "unRead", notificationDate: 1618065197268 }
                }
            },

            john: {
                userName: 'john',
                gender: 'male',
                userThumbnail: 'https://stylecaster.com/wp-content/uploads/2016/12/model-curly-hair-nose-ring.jpg',
                emailAddress: 'john@gmail.com',
                password: 'john',
                userId: '18',
                status: 'offline',
                messages: {
                    chinedu: {
                        522333:

                        {
                            userName: 'john',
                            messageId: '522333',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'hello',
                        },
                        85426: {
                            userName: 'chinedu',
                            messageId: '85426',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            message: 'hi,how are you',
                        },
                        '237549': {
                            userName: 'john',
                            messageId: '237549',
                            messageStatus: 'sent',
                            messageDate: 1618065193905,
                            message: 'i am fine',


                        },


                        1233658: {
                            userName: 'chinedu',
                            messageId: '1233658',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'its good to meet you',
                        },
                    },


                },
                messageStatus: {
                    chigo: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'john',
                        friendMessaged: 'chigo',
                        showMessage: "on",
                    },
                    chinedu: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'john',
                        friendMessaged: 'chinedu',
                        showMessage: "off",
                    },

                },
                posts: [],
                activities: {},
                followers: [{ userName: 'uche', userId: '31' }, { userName: 'bose', userId: '25' }],
                following: [{ userName: 'uche', userId: '31' }, { userName: 'bose', userId: '25' }, ],
                friends: [{ userName: 'chigo', userId: '21' }, ],



                notifications: {
                    45262: { userName: "chigo", notificationType: "friend request", notificationId: "45262", notificationStatus: "unRead", notificationDate: 1618065197268 },
                    4526522: { userName: "uche", notificationType: "message", notificationId: "4526522", notificationStatus: "unRead", notificationDate: 1618065197268 },

                }
            },

            chinedu: {
                userName: 'chinedu',
                gender: 'male',
                userThumbnail: 'https://zsuttonphoto.com/wp-content/uploads/2020/05/Los-Angeles-Beauty-Photography-2020.jpg',
                emailAddress: 'chinedu@gmail.com',
                password: 'chinedu',
                userId: '18',
                status: 'offline',
                messages: {
                    john: {
                        522333:

                        {
                            userName: 'chinedu',
                            messageId: '522333',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'hello',
                        },
                        85426: {
                            userName: 'john',
                            messageId: '85426',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            message: 'hi,how are you',
                        },
                        '237549': {
                            userName: 'chinedu',
                            messageId: '237549',
                            messageStatus: 'sent',
                            messageDate: 1618065193905,
                            message: 'i am fine',


                        },


                        1233658: {
                            userName: 'john',
                            messageId: '1233658',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'its good to meet you',
                        },
                    },
                    chigo: {
                           5564: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            messageId: 5564,
                            message: 'work work work',
                        },
                        8856: {
                            userName: 'chinedu',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            messageId: 8856,
                            message: 'this is life for you',
                        },
                        555664: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193800,
                            messageId: 555664,
                            message: 'life is good',


                        },


                        88564: {
                            userName: 'chinedu',
                            messageStatus: 'sent',
                            messageDate: 1618065193700,
                            messageId: 88564,
                            message: 'try harder brother',
                        },
                    }
                },
                messageStatus: {
                    chigo: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'chinedu',
                        friendMessaged: 'chigo',
                        showMessage: "on",
                    },
                    john: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'chinedu',
                        friendMessaged: 'john',
                        showMessage: "off",
                    },

                },
                posts: [],
                activities: {},
                followers: [{ userName: 'uche', userId: '31' }, { userName: 'bose', userId: '25' }],
                following: [{ userName: 'uche', userId: '31' }, { userName: 'bose', userId: '25' }, ],
                friends: [{ userName: 'uche', userId: '31' }],



                notifications: {
                    45262: { userName: "chigo", notificationType: "friend request", notificationId: "45262", notificationStatus: "unRead", notificationDate: 1618065197268 },
                    4526522: { userName: "uche", notificationType: "message", notificationId: "4526522", notificationStatus: "unRead", notificationDate: 1618065197268 },

                }
            },
            chigo: {
                userName: 'chigo',
                gender: 'male',
                userThumbnail: 'https://zsuttonphoto.com/wp-content/uploads/2019/04/Los-Angeles-Beauty-Photography-LA-1.jpg',
                emailAddress: 'chigo@gmail.com',
                password: 'chigo',
                userId: "21",
                status: 'offline',
                messages: {
                    uche: {
                        '55666': {
                            userName: 'chigo',
                            messageId: '55666',
                            messageStatus: 'sent',
                            messageDate: 1618065193487,
                            message: 'good day boss',
                        },
                        '55668': {
                            userName: 'uche',
                            messageId: '55668',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            message: 'how are u bro',
                        },
                        '4752': {
                            userName: 'chigo',
                            messageId: '4752',
                            messageStatus: 'sent',
                            messageDate: 1618065193945,
                            message: 'i am fine and you',


                        },
 '23335': {
                            userName: 'uche',
                            messageId: '23335',
                            messageStatus: 'sent',
                            messageDate: 1618065881819,
                            message: 'am good',
                        },



                    },
                    bose: {
                        54452:

                        {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            messageId: 54452,
                            message: 'work work work',

                        },
                        8856: {
                            userName: 'bose',
                            messageStatus: 'sent',
                            messageDate: 1618065193955,
                            messageId: 8856,
                            message: 'this is life for you',
                        },
                        5564: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            messageId: 5564,
                            message: 'life is good',


                        },


                        8856: {
                            userName: 'bose',
                            messageStatus: 'sent',
                            messageDate: 1618065193922,
                            messageId: 8856,
                            message: 'try harder brother',
                        },
                    },
                    chinedu: {


                        5564: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193975,
                            messageId: 5564,
                            message: 'work work work',
                        },
                        8856: {
                            userName: 'chinedu',
                            messageStatus: 'sent',
                            messageDate: 1618065193900,
                            messageId: 8856,
                            message: 'this is life for you',
                        },
                        555664: {
                            userName: 'chigo',
                            messageStatus: 'sent',
                            messageDate: 1618065193800,
                            messageId: 555664,
                            message: 'life is good',


                        },


                        88564: {
                            userName: 'chinedu',
                            messageStatus: 'sent',
                            messageDate: 1618065193700,
                            messageId: 88564,
                            message: 'try harder brother',
                        },
                    },
                },
                messageStatus: {
                    uche: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'chigo',
                        friendMessaged: 'uche',
                        showMessage: "off",
                    },

                    bose: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'chigo',
                        friendMessaged: 'bose',
                        showMessage: "off",
                    },
                    chinedu: {
                        messageViewStatus: 'unRead',
                        messageOnScreen: "off",
                        userName: 'chigo',
                        friendMessaged: 'chinedu',
                        showMessage: "on",
                    }
                },
                posts: [],
                activities: {},

                followers: [{ userName: 'bose', userId: '18' }],
                following: [{ userName: 'bose', userId: '18' }],
                friends: [{ userName: 'bose', userId: '18' }, { userName: "john", userId: "30" }],
                notifications: {


                }


            }
        },
        allUsers: {
            uche: {
                userName: "uche",
                requestStatus: "Add Friend",
                requests: [{ userName: "chigo" }]

            },
            bose: {
                userName: "bose",
                requestStatus: "Add Friend",
                requests: []

            },
            chigo: {
                userName: "chigo",
                requestStatus: "Add Friend",
                requests: []

            },
            chinedu: {
                userName: "chinedu",
                requestStatus: "Add Friend",
                requests: []

            },
            john: {
                userName: "john",
                requestStatus: "Add Friend",
                requests: []

            },




        },

        newsFeed: {
            '1': {
                userName: 'chigo',

                userId: '21',
                postId: '1',
                views: [],
                datePosted: 1618065173905,
                posts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                likes: [],
                unLikes: [],
                postStyle: 'text-themeSeven',
                posterComment: '',

                comments: {
                    '1': {
                        userName: 'chigo',
                        commentId: '1',
                        dateCommented: 1618065174905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '2': {
                        userName: 'uche',
                        commentId: '2',
                        dateCommented: 1618065175905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '3': {
                        userName: 'bose',
                        commentId: '3',
                        dateCommented: 1618065176905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    }



                }
            },
            '2': {
                userName: 'uche',
                userId: '31',
                postId: '2',
                views: [],
                datePosted: 1618065163905,
                posts: "I just can't wait for tomorrow o, time please run fast o coz it gonna be my pretty moma birth anniversary, Dikko's favourite, Dikko's investment the only mamaG, inshort tomorrow first friends please get ready coz is gonna be parry after parry. Happy birthday in advance to you my Cute mumilo.",
                likes: [],
                unLikes: [],
                postStyle: 'text-themeSeven',
                posterComment: '',
                comments: {

                    '4': {
                        userName: 'chigo',
                        commentId: '4',
                        dateCommented: 1618065164905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    }
                }

            },
            '3': {
                userName: 'chigo',
                postId: '3',
                views: [],
                datePosted: 1618065143905,
                userId: '21',
                posts: 'life is good',
                likes: [],
                postStyle: 'text-themeFour',
                posterComment: '',
                unLikes: [],
                comments: {
                    '5': {
                        userName: 'chigo',
                        commentId: '5',
                        dateCommented: 1618065145905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '6': {
                        userName: 'chigo',
                        commentId: '6',
                        dateCommented: 1618065146905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    }

                }

            },


            '4': {
                userName: 'uche',
                postId: '4',
                views: [],
                datePosted: 1618065113905,
                userId: '31',
                posts: 'try harder brother',
                likes: [],
                postStyle: 'text-themeTwo',
                posterComment: '',
                unLikes: [],
                comments: {
                    '7': {
                        userName: 'chigo',
                        commentId: '7',
                        dateCommented: 1618065115905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '8': {
                        userName: 'chigo',
                        commentId: '8',
                        dateCommented: 1618064115905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '9': {
                        userName: 'chinedu',
                        commentId: '9',
                        dateCommented: 1618069993905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    }


                }
            },
            '5656': {
                userName: 'bose',

                userId: '18',
                postId: '5656',
                views: [],
                datePosted: 1619870462772,
                posts: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                likes: [],
                unLikes: [],
                postStyle: 'text-themeThree',
                posterComment: '',
                comments: {
                    '1': {
                        userName: 'john',
                        commentId: '1',
                        dateCommented: 1618065174905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '2': {
                        userName: 'uche',
                        commentId: '2',
                        dateCommented: 1618065175905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    },
                    '3': {
                        userName: 'bose',
                        commentId: '3',
                        dateCommented: 1618065176905,
                        comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                        likes: [],
                        unLikes: [],
                    }



                }
            },

        }

    },
    mutations: {
        handleLogin(state, payLoad) {
            state.users[payLoad.userName].status = payLoad.status
            state.userData = state.users[payLoad.userName]

        },



        updateUserData(state, payLoad) {
            const userName = Object.keys(payLoad)[0];
            state.userData = state.users[userName]
        },


        handleAddAccount(state, payLoad) {

            state.user = payLoad;
            state.users = {...state.users, ...state.user }

        },

        handlePublishPost(state, payLoad) {
            const userName = Object.keys(payLoad)[0];
            state.newsFeed = {...state.newsFeed, ...payLoad }
                // state.users[payLoad[userName].userName].posts = {...state.users[payLoad[userName].userName].posts, ...payLoad }

        },

        handlePosterComment(state, payLoad) {
            const commentId = Object.keys(payLoad)[0];
            state.newsFeed[payLoad[commentId].postId].comments = {...state.newsFeed[payLoad[commentId].postId].comments, ...payLoad }
            state.newsFeed[payLoad[commentId].postId].posterComment = ''
        },



        handleLikes(state, payLoad) {
            switch (payLoad.condition) {
                case 'postLikes':
                    const indexLikes = state.newsFeed[payLoad.postId].likes.indexOf(payLoad.userId)
                    const indexUnikes = state.newsFeed[payLoad.postId].unLikes.indexOf(payLoad.userId)
                    if (payLoad.params === 'incrementPostLikes') {
                        if (state.newsFeed[payLoad.postId].likes.indexOf(payLoad.userId) < 0) {

                            state.newsFeed[payLoad.postId].likes.push(payLoad.userId)
                            state.newsFeed[payLoad.postId].unLikes.splice(indexUnikes, 1)
                        } else {
                            state.newsFeed[payLoad.postId].likes.splice(indexLikes, 1)
                        }
                    } else {
                        if (state.newsFeed[payLoad.postId].unLikes.indexOf(payLoad.userId) < 0) {
                            state.newsFeed[payLoad.postId].unLikes.push(payLoad.userId)
                            state.newsFeed[payLoad.postId].likes.splice(indexLikes, 1)
                        } else {
                            state.newsFeed[payLoad.postId].unLikes.splice(indexUnikes, 1)
                        }
                    }
                    break;

                case 'commentLikes':
                    const indexCommentLikes = state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.indexOf(payLoad.userId)
                    const indexCommentUnikes = state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.indexOf(payLoad.userId)
                    if (payLoad.params === 'incrementCommentLikes') {
                        if (state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.indexOf(payLoad.userId) < 0) {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.push(payLoad.userId)
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.splice(indexCommentUnikes, 1)
                        } else {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.splice(indexCommentLikes, 1)
                        }
                    } else {
                        if (state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.indexOf(payLoad.userId) < 0) {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.push(payLoad.userId)
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].likes.splice(indexCommentLikes, 1)
                        } else {
                            state.newsFeed[payLoad.postId].comments[payLoad.commentId].unLikes.splice(indexCommentUnikes, 1)
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
                messageStatus: payLoad[Object.keys(payLoad)[0]].messageStatus,
            }

            state.users[userName].messages[friendMessaged] = {...state.users[userName].messages[friendMessaged], [messsageData.messageId]: {...messsageData } }


            state.users[friendMessaged].messages[userName] = {...state.users[friendMessaged].messages[userName], [messsageData.messageId]: {...messsageData } }


        },

        handleDeleteMessage(state, payLoad) {

            delete state.users[payLoad.userName].messages[payLoad.friendMessaged][payLoad.messageId]
        },


        handleMessageViewStatus(state, payLoad) {

            for (const messageId in state.users[payLoad.friendMessaged].messages[payLoad.userName]) {
                if (state.users[payLoad.friendMessaged].messages[payLoad.userName][messageId].userName === payLoad.friendMessaged) {

                    state.users[payLoad.friendMessaged].messages[payLoad.userName][messageId].messageStatus = "Read"
                    state.users[payLoad.userName].messages[payLoad.friendMessaged][messageId].messageStatus = "Read"

                }



            }


            for (const showMessage in state.users[payLoad.userName].messageStatus) {
                state.users[payLoad.userName].messageStatus[showMessage].showMessage = "off"
            }

            if (payLoad.messageViewStatus === "Read") {

   for (const showMessage in state.users[payLoad.userName].messageStatus) {
                state.users[payLoad.userName].messageStatus[showMessage].messageOnScreen = payLoad.messageOnScreen
            }

                state.users[payLoad.userName].messageStatus = {...state.users[payLoad.userName].messageStatus,
                    [payLoad.friendMessaged]: {
                        friendMessaged: payLoad.friendMessaged,
                        userName: payLoad.userName,
                        messageOnScreen:payLoad.messageOnScreen,
                        messageViewStatus: payLoad.messageViewStatus,
                        showMessage: "on",

                    }

                }
            } else {

                state.users[payLoad.friendMessaged].messageStatus = {...state.users[payLoad.friendMessaged].messageStatus,
                    [payLoad.userName]: {
                        friendMessaged: payLoad.userName,
                        userName: payLoad.userName,
                        messageOnScreen:"off",
                        messageViewStatus: payLoad.messageViewStatus,
                        showMessage: "on",

                    }



                }
   state.users[payLoad.userName].messageStatus = {...state.users[payLoad.userName].messageStatus,
                    [payLoad.friendMessaged]: {
                        friendMessaged: payLoad.friendMessaged,
                        userName: payLoad.userName,
                        messageOnScreen:"on",
                        messageViewStatus: "read",
                        showMessage: "on",

                    }

}

            }





        },

        handleMessageStatus(state, payLoad) {

            for (const userName in state.users) {
                for (const messageUserName in state.users[userName].messages) {
                    if (messageUserName === payLoad.userName && userName !== payLoad.userName) {
                        for (const messageId in state.users[userName].messages[messageUserName]) {
                            if (state.users[userName].messages[messageUserName][messageId].userName !== payLoad.userName) {
                                if (state.users[userName].messages[messageUserName][messageId].messageStatus === 'sent') {
                                  state.users[userName].messages[messageUserName][messageId].messageStatus = 'received'
                                    state.users[payLoad.userName].messages[userName][messageId].messageStatus = 'received'

                                }




                            }






                        }
                    }


                }

            }


        },


        handleFriendRequest(state, payLoad) {
            if (payLoad.requestStatus === "Friend Request Sent") {
                state.allUsers[payLoad.friendUserName].requests = [...state.allUsers[payLoad.friendUserName].requests, { userName: payLoad.userName }]
            } else {
                state.users[payLoad.userName].friends = [...state.users[payLoad.userName].friends, { userName: payLoad.friendUserName }]
                state.users[payLoad.friendUserName].friends = [...state.users[payLoad.friendUserName].friends, { userName: payLoad.userName }]
                state.allUsers[payLoad.userName].requests = state.allUsers[payLoad.userName].requests.filter((user) => user.userName !== payLoad.friendUserName)

            }

        },

        handleFollow(state, payLoad) {
            if (payLoad.followState === "follow") {

                state.users[payLoad.userName].following = [...state.users[payLoad.userName].following, { userName: payLoad.friendUserName }]

                return state.users[payLoad.friendUserName].followers = [...state.users[payLoad.friendUserName].followers, { userName: payLoad.userName }]

            }
            state.users[payLoad.userName].following = state.users[payLoad.userName].following.filter((userName) => userName.userName !== payLoad.friendUserName)
            return state.users[payLoad.friendUserName].followers = state.users[payLoad.friendUserName].followers.filter((userName) => userName.userName !== payLoad.userName)

        },


        handleCancelFriendRequest(state, payLoad) {
            state.allUsers[payLoad.userName].requests = state.allUsers[payLoad.userName].requests.filter((user) => user.userName !== payLoad.friendUserName)
            state.allUsers[payLoad.userName].requestStatus = "Add Friend"
        },

        handleNotifications(state, payLoad) {
            switch (payLoad.notificationType) {
                case "post":

                    if (state.users[payLoad.userName].friends.length) {
                        state.users[payLoad.userName].friends.forEach(friend => {
                            state.users[friend.userName].notifications = {...state.users[friend.userName].notifications, [payLoad.notificationId]: {...payLoad } }

                        });

                    }
                    break;

                case "friend request":
                    state.users[payLoad.friendUserName].notifications = {...state.users[payLoad.friendUserName].notifications, [payLoad.notificationId]: {...payLoad } }

                    break;

                case "message":
                    state.users[payLoad.friendUserName].notifications = {...state.users[payLoad.friendUserName].notifications, [payLoad.notificationId]: {...payLoad } }

                    break;

                case "likes":
                    state.users[payLoad.posterUserName].notifications = {...state.users[payLoad.posterUserName].notifications, [payLoad.notificationId]: {...payLoad } }
                    state.users[payLoad.userName].friends.forEach(friend => {
                        state.users[friend.userName].notifications = {...state.users[friend.userName].notifications, [payLoad.notificationId]: {...payLoad } }

                    });

                    break;

                case "likedComment":
                    state.users[payLoad.posterUserName].notifications = {...state.users[payLoad.posterUserName].notifications, [payLoad.notificationId]: {...payLoad } }
                    state.users[payLoad.userName].friends.forEach(friend => {
                        state.users[friend.userName].notifications = {...state.users[friend.userName].notifications, [payLoad.notificationId]: {...payLoad } }

                    });

                    break;


                case "comment":
                    if (payLoad.posterUserName !== payLoad.posterUserName) {
                        state.users[payLoad.posterUserName].notifications = {...state.users[payLoad.posterUserName].notifications, [payLoad.notificationId]: {...payLoad } }
                    }
                    state.users[payLoad.userName].friends.forEach(friend => {
                        state.users[friend.userName].notifications = {...state.users[friend.userName].notifications, [payLoad.notificationId]: {...payLoad } }

                    });
                    break;

                case "follow":
                    state.users[payLoad.friendUserName].notifications = {...state.users[payLoad.friendUserName].notifications, [payLoad.notificationId]: {...payLoad } }

                    break;
                case "Accepted Friend Request":
                    state.users[payLoad.friendUserName].notifications = {...state.users[payLoad.friendUserName].notifications, [payLoad.notificationId]: {...payLoad } }

                    break;



                default:
                    break;
            }


        },


        handleNotificationUpdate(state, payLoad) {
            for (const notificationsId in state.users[payLoad.userName].notifications) {
                if (state.users[payLoad.userName].notifications[notificationsId].notificationType === payLoad.notificationType) {
                    state.users[payLoad.userName].notifications[notificationsId].notificationStatus = "Read"
                 
                }
            }


        },

        handleActivities(state, payLoad) {

            state.users[payLoad.userName].activities = {...state.users[payLoad.userName].activities, [payLoad.activityId]: {...payLoad } }


        },
        handlePostViews(state, payLoad) {
            for (const userKey in state.newsFeed) {
                state.newsFeed[userKey].views = [...state.newsFeed[userKey].views, payLoad.userName]
            }
            // state.newsFeed[payLoad.posterUserName].views=[...state.newsFeed[payLoad.posterUserName].views,payLoad.userName]        


        },











    },
    actions: {

        handleAddAccount(context, payLoad) {
            context.commit('handleAddAccount', payLoad)
        },

        handlePublishPost(context, payLoad) {
            context.commit('handlePublishPost', payLoad)
        },

        handleLikes(context, payLoad) {

            context.commit('handleLikes', payLoad)
        },

        handlePosterComment(context, payLoad) {


            context.commit('handlePosterComment', payLoad)

        },
        handleLogin(context, payLoad) {
            context.commit('handleLogin', payLoad)

        },
        updateUserData(context, payLoad) {
            context.commit('updateUserData', payLoad)

        },

        handleSubmitMessage(context, payLoad) {
            context.commit('handleSubmitMessage', payLoad)

        },
        handleDeleteMessage(context, payLoad) {
            context.commit('handleDeleteMessage', payLoad)

        },
        handleMessageViewStatus(context, payLoad) {
            context.commit('handleMessageViewStatus', payLoad)

        },
        handleMessageStatus(context, payLoad) {
            context.commit('handleMessageStatus', payLoad)

        },
        handleFriendRequest(context, payLoad) {
            context.commit('handleFriendRequest', payLoad)

        },

        handleCancelFriendRequest(context, payLoad) {
            context.commit('handleCancelFriendRequest', payLoad)

        },
        handleNotifications(context, payLoad) {
            context.commit('handleNotifications', payLoad)

        },
        handleNotificationUpdate(context, payLoad) {
            context.commit('handleNotificationUpdate', payLoad)

        },
        handleFollow(context, payLoad) {
            context.commit('handleFollow', payLoad)

        },

        handleActivities(context, payLoad) {
            context.commit('handleActivities', payLoad)

        },
        handlePostViews(context, payLoad) {
            context.commit('handlePostViews', payLoad)

        },

    },

    getters: {
        updateUserData(state) {
            return state.userData
        }


    },

    modules: {}
})