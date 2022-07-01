import './styles/index.scss';
import $ from 'jquery';

$('document').ready(function () {
            if (document.documentElement.clientWidth <= 550) {
                var playerName = $(".match-progress__player-name")
                var deletePartOfName;
                for (var i = 0; i < playerName.length; i++) {
                    deletePartOfName = playerName[i].textContent
                    deletePartOfName = deletePartOfName.split(' ')
                    deletePartOfName = deletePartOfName[0] + " " + deletePartOfName[2]
                    playerName[i].textContent = deletePartOfName
                    console.log(deletePartOfName)
                }
            }
        })