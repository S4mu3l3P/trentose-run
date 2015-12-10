/* your code should go here */

$(document).ready(function () {
    var runModel = {
        /**
         * Initialises the model with the "database" of filter rules
         * and messages. This function is already implemented.
         */
        init: function () {
            this.runners = data;
            console.log(this.runners);
        },

        getSpecificRunner: function (categoryType) {
            if (categoryType == "all") {
                this.runners = data;
                return this.runners;
            } else {
                var tmp = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].category == categoryType) {
                        tmp.push(data[i]);
                    }
                }
                this.runners = tmp;
                return this.runners;
            }
        },

        filter: function () {
            var newmessages = [];

            console.log(newmessages);
            return newmessages;
        }


    };



    var octopus = {

        init: function () {
            runModel.init();
            runView.init();
        }

    };

    var runView = {

        init: function () {
            var categoryType = $("select option:selected").val();
            console.log(categoryType);
            runView.populateRunView(runModel.getSpecificRunner(categoryType));
            $("#btn-filter").click(function () {
                categoryType = $("select option:selected").val();
                console.log(categoryType);
                runView.populateRunView(runModel.getSpecificRunner(categoryType));
            });
        },

        populateRunView: function (list) {
            var htmlStr = '';
            var htmlStr_2 = '';
            var filtered_run = list;
            for (var i = 0; i < 3; i++) {
                htmlStr += '<li>' +
                    '<div class="selfie">' +
                    '<img src="' + filtered_run[i].pic + '">' +
                    '</div>' +
                    '<div class="stats">' +
                    '<h2>' + filtered_run[i].name + '<small>  ' + filtered_run[i].category + '</small></h2>' +
                    '<strong>Time</strong>  ' + filtered_run[i].time + ' mins   ' +
                    '<strong> Selfies </strong>  ' + filtered_run[i].sefies +
                    '</div>' +
                    '<div class="badge">' +
                    '#' + i +
                    '</div></li>';
            }
            $("#top-selfiers").html(htmlStr);

            for (var i = 4; i < filtered_run.length; i++) {
                htmlStr_2 += '<li>' +
                    '<div>' + filtered_run[i].name + '(' + filtered_run[i].category + ')' +
                    '<strong>Time</strong>  ' + filtered_run[i].time + ' mins' +
                    '<strong> Selfies </strong>  ' + filtered_run[i].sefies +
                    '</div>' +
                    '<div>' +
                    '#' + i +
                    '</div></li>';
            }
            $("#selfiers").html(htmlStr_2);
        }

    };

    octopus.init();
});
