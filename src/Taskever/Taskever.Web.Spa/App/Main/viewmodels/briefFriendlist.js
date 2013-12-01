﻿define(
    ["knockout", 'session', 'service!taskever/friendship'],
    function (ko, session, friendshipService) {

        var maxTaskCount = 10;

        return function () {
            var that = this;

            // Private variables //////////////////////////////////////////////////

            // Public fields //////////////////////////////////////////////////////

            that.friendships = ko.mapping.fromJS([]);

            // Public methods /////////////////////////////////////////////////////

            that.activate = function () {
                friendshipService.getFriendshipsByMostActive({
                    maxResultCount: maxTaskCount
                }).then(function (data) {
                    ko.mapping.fromJS(data.friendships, that.friendships);
                });
            };
        };

    });