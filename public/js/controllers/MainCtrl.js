angular.module('MainCtrl', []).controller('MainController', function($scope) {

  //data
  $scope.player1 = {
    name: '',
    score: 0
  };
  $scope.player2 = {
    name: '',
    score: 0
  };

  // Poor man's database

  $scope.players = [{"id":1,"name":"Brandon Hay","wins":32,"losses":20,"scoreDifferential":96,"winPctg":0.6153846153846154,"streak":"L1"},{"id":2,"name":"Matt Vaccaro","wins":30,"losses":15,"scoreDifferential":176,"winPctg":0.6666666666666666,"streak":"W1"},{"id":3,"name":"Juan Martinez","wins":8,"losses":23,"scoreDifferential":-175,"winPctg":0.25806451612903225,"streak":"L2"},{"id":4,"name":"Luis Bello","wins":3,"losses":11,"scoreDifferential":-82,"winPctg":0.21428571428571427,"streak":"L5"},{"id":5,"name":"John Yorke","wins":14,"losses":10,"scoreDifferential":70,"winPctg":0.5833333333333334,"streak":"W4"},{"id":6,"name":"Matt Vadala","wins":0,"losses":5,"scoreDifferential":-52,"winPctg":0,"streak":"L5"},{"id":7,"name":"J.P. Sangcheu","wins":0,"losses":1,"scoreDifferential":-10,"winPctg":0,"streak":"L1"},{"id":8,"name":"Chris Confalone","wins":8,"losses":4,"scoreDifferential":2,"winPctg":0.6666666666666666,"streak":"L1"},{"id":9,"name":"Lucas Hendrich","wins":0,"losses":3,"scoreDifferential":-21,"winPctg":0,"streak":"L3"},{"id":10,"name":"Lekan Aje","wins":0,"losses":1,"scoreDifferential":-4,"winPctg":0,"streak":"L1"}]
;

  $scope.games = [{"gameid":1,"players":[{"name":"Brandon Hay","score":9},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-06T18:26:56.628Z"},{"gameid":2,"players":[{"name":"Brandon Hay","score":16},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-06T18:26:56.628Z"},{"gameid":3,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":9}],"winner":"Brandon Hay","time":"2016-01-06T18:26:56.628Z"},{"gameid":4,"players":[{"name":"Matt Vaccaro","score":22},{"name":"Brandon Hay","score":20}],"winner":"Matt Vaccaro","time":"2016-01-06T18:26:56.628Z"},{"gameid":5,"players":[{"name":"Juan Martinez","score":21},{"name":"Luis Bello","score":8}],"winner":"Juan Martinez","time":"2016-01-06T18:26:56.628Z"},{"gameid":6,"players":[{"name":"Juan Martinez","score":21},{"name":"Luis Bello","score":18}],"winner":"Juan Martinez","time":"2016-01-06T18:26:56.628Z"},{"gameid":7,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":14}],"winner":"Brandon Hay","time":"2016-01-06T19:48:50.289Z"},{"gameid":8,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":7}],"winner":"Brandon Hay","time":"2016-01-06T19:49:01.930Z"},{"gameid":9,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":5}],"winner":"Brandon Hay","time":"2016-01-06T21:29:44.228Z"},{"gameid":10,"players":[{"name":"Brandon Hay","score":10},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-06T21:29:50.355Z"},{"gameid":11,"players":[{"name":"Brandon Hay","score":21},{"name":"Luis Bello","score":5}],"winner":"Brandon Hay","time":"2016-01-06T21:29:57.601Z"},{"gameid":12,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Luis Bello","score":14}],"winner":"Matt Vaccaro","time":"2016-01-06T21:35:48.923Z"},{"gameid":13,"players":[{"name":"Juan Martinez","score":24},{"name":"Luis Bello","score":22}],"winner":"Juan Martinez","time":"2016-01-06T21:51:26.953Z"},{"gameid":14,"players":[{"name":"Matt Vaccaro","score":25},{"name":"John Yorke","score":23}],"winner":"Matt Vaccaro","time":"2016-01-06T21:58:56.608Z"},{"gameid":15,"players":[{"name":"Matt Vaccaro","score":21},{"name":"John Yorke","score":18}],"winner":"Matt Vaccaro","time":"2016-01-06T22:04:04.793Z"},{"gameid":16,"players":[{"name":"Brandon Hay","score":21},{"name":"John Yorke","score":12}],"winner":"Brandon Hay","time":"2016-01-06T22:09:29.656Z"},{"gameid":17,"players":[{"name":"Brandon Hay","score":16},{"name":"John Yorke","score":21}],"winner":"John Yorke","time":"2016-01-06T22:15:06.505Z"},{"gameid":18,"players":[{"name":"Brandon Hay","score":21},{"name":"John Yorke","score":17}],"winner":"Brandon Hay","time":"2016-01-06T22:20:22.623Z"},{"gameid":19,"players":[{"name":"John Yorke","score":21},{"name":"Matt Vadala","score":10}],"winner":"John Yorke","time":"2016-01-07T18:51:54.007Z"},{"gameid":20,"players":[{"name":"John Yorke","score":21},{"name":"Matt Vadala","score":12}],"winner":"John Yorke","time":"2016-01-07T18:51:56.307Z"},{"gameid":21,"players":[{"name":"Brandon Hay","score":9},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-07T18:52:22.656Z"},{"gameid":22,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":19}],"winner":"Brandon Hay","time":"2016-01-07T18:52:30.239Z"},{"gameid":23,"players":[{"name":"Juan Martinez","score":9},{"name":"John Yorke","score":21}],"winner":"John Yorke","time":"2016-01-07T19:07:08.361Z"},{"gameid":24,"players":[{"name":"Juan Martinez","score":12},{"name":"John Yorke","score":21}],"winner":"John Yorke","time":"2016-01-07T19:07:13.077Z"},{"gameid":25,"players":[{"name":"Luis Bello","score":21},{"name":"Juan Martinez","score":15}],"winner":"Luis Bello","time":"2016-01-07T21:02:49.229Z"},{"gameid":26,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Brandon Hay","score":17}],"winner":"Matt Vaccaro","time":"2016-01-07T21:39:25.044Z"},{"gameid":27,"players":[{"name":"Matt Vaccaro","score":21},{"name":"J.P. Sangcheu","score":11}],"winner":"Matt Vaccaro","time":"2016-01-07T22:44:17.005Z"},{"gameid":28,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":10}],"winner":"Matt Vaccaro","time":"2016-01-07T22:44:31.345Z"},{"gameid":29,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":14}],"winner":"Matt Vaccaro","time":"2016-01-07T22:44:37.202Z"},{"gameid":30,"players":[{"name":"Brandon Hay","score":21},{"name":"John Yorke","score":15}],"winner":"Brandon Hay","time":"2016-01-08T17:32:44.669Z"},{"gameid":31,"players":[{"name":"Brandon Hay","score":21},{"name":"John Yorke","score":12}],"winner":"Brandon Hay","time":"2016-01-08T17:32:53.267Z"},{"gameid":32,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":10}],"winner":"Matt Vaccaro","time":"2016-01-08T19:58:42.952Z"},{"gameid":33,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":15}],"winner":"Matt Vaccaro","time":"2016-01-08T19:58:45.956Z"},{"gameid":34,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Brandon Hay","score":8}],"winner":"Matt Vaccaro","time":"2016-01-08T20:51:25.903Z"},{"gameid":35,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Luis Bello","score":6}],"winner":"Matt Vaccaro","time":"2016-01-08T20:56:54.716Z"},{"gameid":36,"players":[{"name":"Juan Martinez","score":22},{"name":"John Yorke","score":20}],"winner":"Juan Martinez","time":"2016-01-08T21:32:45.250Z"},{"gameid":37,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":8}],"winner":"Brandon Hay","time":"2016-01-08T21:32:58.394Z"},{"gameid":38,"players":[{"name":"Brandon Hay","score":21},{"name":"Luis Bello","score":12}],"winner":"Brandon Hay","time":"2016-01-08T21:33:28.903Z"},{"gameid":39,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":19}],"winner":"Brandon Hay","time":"2016-01-08T21:33:35.959Z"},{"gameid":40,"players":[{"name":"Brandon Hay","score":7},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-08T21:33:44.753Z"},{"gameid":41,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":17}],"winner":"Brandon Hay","time":"2016-01-08T22:09:47.966Z"},{"gameid":42,"players":[{"name":"Matt Vaccaro","score":31},{"name":"John Yorke","score":29}],"winner":"Matt Vaccaro","time":"2016-01-08T22:18:46.482Z"},{"gameid":43,"players":[{"name":"Luis Bello","score":10},{"name":"John Yorke","score":21}],"winner":"John Yorke","time":"2016-01-08T22:43:23.356Z"},{"gameid":44,"players":[{"name":"Brandon Hay","score":25},{"name":"John Yorke","score":27}],"winner":"John Yorke","time":"2016-01-08T22:54:16.856Z"},{"gameid":45,"players":[{"name":"Juan Martinez","score":11},{"name":"John Yorke","score":21}],"winner":"John Yorke","time":"2016-01-08T22:54:26.555Z"},{"gameid":46,"players":[{"name":"Juan Martinez","score":19},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-08T23:15:52.904Z"},{"gameid":47,"players":[{"name":"Juan Martinez","score":8},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-08T23:16:09.715Z"},{"gameid":48,"players":[{"name":"Brandon Hay","score":19},{"name":"Juan Martinez","score":21}],"winner":"Juan Martinez","time":"2016-01-11T17:23:30.011Z"},{"gameid":49,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":9}],"winner":"Brandon Hay","time":"2016-01-11T17:23:34.268Z"},{"gameid":50,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":16}],"winner":"Brandon Hay","time":"2016-01-11T17:23:38.254Z"},{"gameid":51,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":11}],"winner":"Brandon Hay","time":"2016-01-11T18:37:54.544Z"},{"gameid":52,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":13}],"winner":"Brandon Hay","time":"2016-01-11T18:37:58.674Z"},{"gameid":53,"players":[{"name":"Chris Confalone","score":21},{"name":"John Yorke","score":18}],"winner":"Chris Confalone","time":"2016-01-12T18:31:11.352Z"},{"gameid":54,"players":[{"name":"Chris Confalone","score":21},{"name":"John Yorke","score":17}],"winner":"Chris Confalone","time":"2016-01-12T18:31:13.982Z"},{"gameid":55,"players":[{"name":"Brandon Hay","score":21},{"name":"Juan Martinez","score":9}],"winner":"Brandon Hay","time":"2016-01-12T18:31:34.839Z"},{"gameid":56,"players":[{"name":"Brandon Hay","score":20},{"name":"Matt Vaccaro","score":22}],"winner":"Matt Vaccaro","time":"2016-01-12T18:32:08.630Z"},{"gameid":57,"players":[{"name":"Brandon Hay","score":13},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-12T18:32:15.212Z"},{"gameid":58,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":18}],"winner":"Brandon Hay","time":"2016-01-12T18:32:22.009Z"},{"gameid":59,"players":[{"name":"Chris Confalone","score":21},{"name":"Lucas Hendrich","score":15}],"winner":"Chris Confalone","time":"2016-01-12T18:38:25.425Z"},{"gameid":60,"players":[{"name":"Chris Confalone","score":21},{"name":"Lucas Hendrich","score":16}],"winner":"Chris Confalone","time":"2016-01-12T18:38:28.757Z"},{"gameid":61,"players":[{"name":"John Yorke","score":21},{"name":"Matt Vadala","score":14}],"winner":"John Yorke","time":"2016-01-12T20:55:08.438Z"},{"gameid":62,"players":[{"name":"John Yorke","score":21},{"name":"Matt Vadala","score":16}],"winner":"John Yorke","time":"2016-01-12T20:55:11.717Z"},{"gameid":63,"players":[{"name":"Brandon Hay","score":22},{"name":"Matt Vaccaro","score":20}],"winner":"Brandon Hay","time":"2016-01-12T22:18:59.785Z"},{"gameid":64,"players":[{"name":"Brandon Hay","score":17},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-12T22:19:06.535Z"},{"gameid":65,"players":[{"name":"Brandon Hay","score":17},{"name":"Matt Vaccaro","score":21}],"winner":"Matt Vaccaro","time":"2016-01-12T22:19:07.853Z"},{"gameid":66,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":18}],"winner":"Brandon Hay","time":"2016-01-12T22:19:15.931Z"},{"gameid":67,"players":[{"name":"John Yorke","score":21},{"name":"Juan Martinez","score":6}],"winner":"John Yorke","time":"2016-01-12T22:19:31.797Z"},{"gameid":68,"players":[{"name":"John Yorke","score":21},{"name":"Matt Vaccaro","score":18}],"winner":"John Yorke","time":"2016-01-12T22:19:36.149Z"},{"gameid":69,"players":[{"name":"Chris Confalone","score":9},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-12T22:19:47.945Z"},{"gameid":70,"players":[{"name":"Chris Confalone","score":21},{"name":"Matt Vaccaro","score":18}],"winner":"Chris Confalone","time":"2016-01-12T22:19:55.772Z"},{"gameid":71,"players":[{"name":"Brandon Hay","score":21},{"name":"Lekan Aje","score":17}],"winner":"Brandon Hay","time":"2016-01-12T22:20:22.091Z"},{"gameid":72,"players":[{"name":"Brandon Hay","score":19},{"name":"Chris Confalone","score":21}],"winner":"Chris Confalone","time":"2016-01-13T17:19:11.151Z"},{"gameid":73,"players":[{"name":"Matt Vadala","score":16},{"name":"Chris Confalone","score":21}],"winner":"Chris Confalone","time":"2016-01-13T17:25:36.293Z"},{"gameid":74,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Brandon Hay","score":8}],"winner":"Matt Vaccaro","time":"2016-01-13T21:57:11.676Z"},{"gameid":75,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Lucas Hendrich","score":11}],"winner":"Matt Vaccaro","time":"2016-01-13T21:57:22.190Z"},{"gameid":76,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Chris Confalone","score":16}],"winner":"Matt Vaccaro","time":"2016-01-13T22:01:22.237Z"},{"gameid":77,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Brandon Hay","score":7}],"winner":"Matt Vaccaro","time":"2016-01-13T22:06:22.670Z"},{"gameid":78,"players":[{"name":"Chris Confalone","score":12},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-13T22:17:01.097Z"},{"gameid":79,"players":[{"name":"Matt Vaccaro","score":19},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-13T22:24:01.202Z"},{"gameid":80,"players":[{"name":"Chris Confalone","score":21},{"name":"Brandon Hay","score":16}],"winner":"Chris Confalone","time":"2016-01-13T22:30:56.459Z"},{"gameid":81,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":17}],"winner":"Brandon Hay","time":"2016-01-14T18:14:24.553Z"},{"gameid":82,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":19}],"winner":"Brandon Hay","time":"2016-01-14T18:14:27.332Z"},{"gameid":83,"players":[{"name":"Brandon Hay","score":21},{"name":"Matt Vaccaro","score":16}],"winner":"Brandon Hay","time":"2016-01-14T18:14:30.400Z"},{"gameid":84,"players":[{"name":"Luis Bello","score":20},{"name":"Juan Martinez","score":22}],"winner":"Juan Martinez","time":"2016-01-14T18:40:16.611Z"},{"gameid":85,"players":[{"name":"Luis Bello","score":16},{"name":"Juan Martinez","score":21}],"winner":"Juan Martinez","time":"2016-01-14T18:40:23.607Z"},{"gameid":86,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":6}],"winner":"Matt Vaccaro","time":"2016-01-14T22:08:59.142Z"},{"gameid":87,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Juan Martinez","score":10}],"winner":"Matt Vaccaro","time":"2016-01-14T22:09:02.020Z"},{"gameid":88,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Chris Confalone","score":16}],"winner":"Matt Vaccaro","time":"2016-01-14T22:12:53.783Z"},{"gameid":89,"players":[{"name":"Matt Vaccaro","score":15},{"name":"Brandon Hay","score":21}],"winner":"Brandon Hay","time":"2016-01-14T22:20:23.424Z"},{"gameid":90,"players":[{"name":"Matt Vaccaro","score":21},{"name":"Brandon Hay","score":14}],"winner":"Matt Vaccaro","time":"2016-01-14T22:28:16.360Z"}]
;
  $scope.addPlayer = function() {
    $scope.players.push({
      id: $scope.players.length + 1,
      name: $scope.newPlayerName,
      wins: 0,
      losses: 0,
      scoreDifferential: 0,
      winPctg: 0,
      streak: ''
    });
  };
  // post game processing functions
  $scope.addGame = function() {
    $scope.games.push({
      gameid: $scope.games.length + 1,
      players : [
        { name: $scope.player1.name, score: $scope.player1.score },
        { name: $scope.player2.name, score: $scope.player2.score }
      ],
      winner: getWinner(),
      time: new Date()
    });
    $scope.updateScoreDifferential($scope.games[$scope.games.length - 1]);
  };
  var getWinner = function (){
    if ($scope.player1.score > $scope.player2.score ) {
      $scope.players.filter(function(player) {
        if (player.name == $scope.player1.name) {
          player.wins++;
        }
        if (player.name == $scope.player2.name) {
          player.losses++;
        }
      });
      return $scope.player1.name;
    } else if ($scope.player1.score < $scope.player2.score) {
      $scope.players.filter(function(player) {
        if (player.name == $scope.player2.name) {
          player.wins++;
        }
        if (player.name == $scope.player1.name) {
          player.losses++;
        }
      });
      return $scope.player2.name;
    } else {
      return 'ummmm, tie?';
    }
  };

  $scope.updateScoreDifferential = function(game) {
    var scoreDifferential = 0;
    var player1 = game.players[0];
    var player2 = game.players[1];

    // player 1 wins
    if (player1.score > player2.score) {
      scoreDifferential = player1.score - player2.score;
      $scope.players.filter(function (player){
        if (player.name == player1.name) {
          player.scoreDifferential += scoreDifferential;
          $scope.updateWinPctg(player);
        }
        if (player.name == player2.name) {
          player.scoreDifferential -= scoreDifferential;
          $scope.updateWinPctg(player);
        }
      });

    // player 2 wins
    } else if (player1.score < player2.score) {
      scoreDifferential += (player2.score - player1.score);
      $scope.players.filter(function (player){
        if (player.name == player2.name) {
          player.scoreDifferential += scoreDifferential;
          $scope.updateWinPctg(player);
        }
        if (player.name == player1.name) {
          player.scoreDifferential -= scoreDifferential;
          $scope.updateWinPctg(player);
        }
      });
    }
  };
  $scope.doStuff = function() {
    $scope.players.forEach(function (player){
      $scope.getPlayerGames(player);
    });
  };

  // pass in a players name to get just their games
  $scope.getPlayerGames = function (player) {
    var playerGames = [];
    $scope.games.filter(function (game){
      if (game.players[0].name == player.name || game.players[1].name == player.name) {
        playerGames.push(game);
      }
    });
    if (playerGames.length > 0) {
      $scope.getStreak(playerGames, player);
    }
  };
  $scope.getStreak = function(playerGames, player) {
    var streak = 1;
    var outcome = '';
    if (playerGames[playerGames.length -1].winner == player.name) {
      outcome = 'W';
      for (var i = playerGames.length - 2;i >= 0; i--) {
        if (playerGames[i].winner == player.name) {
          streak ++;
        } else {
          break;
        }
      }
      // the players current winning streak
      player.streak = outcome + streak;
    } else {
      outcome = 'L';
      for (var i = playerGames.length - 2;i >= 0; i--) {
        if (playerGames[i].winner !== player.name) {
          streak ++;
        } else {
          break;
        }
      }
      // the players current winning streak
      player.streak = outcome + streak;
    }
  };

  $scope.updateWinPctg = function () {
    $scope.players.forEach(function (player){
      player.winPctg = player.wins / (player.wins + player.losses);
    });
  };

  $scope.updateAllScoreDifferential = function() {
    $scope.games.forEach(function (game) {
      $scope.updateScoreDifferential(game);
    });
  };

  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [
      {
        field: 'name'
      },
      {
        field: 'wins'
      },
      {
        field: 'losses'
      },
      {
        field: 'streak'
      },
      {
        field: 'winPctg',
        visible: false,
        sort: {
          direction: 'desc',
          priority: 1
        }
      }
    ],
    data: $scope.players,
  };
});
