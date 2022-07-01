import './styles/index.scss';
import $ from 'jquery';

$(document).mouseup(function (e) { 
  var div = $(".popup__modal-block"); 
  if (!div.is(e.target) 
      &&
      div.has(e.target).length === 0) { 
        $("#confidentiality-modal").removeClass("flex");
        $("#offer-agreement-modal").removeClass("flex");
        $("body").removeClass("overflow-no")
  }
});

$('.class').on('click', function () {
  if ($(this).attr('id') == 'confidentiality-button')
  {
    $(`#confidentiality-modal`).addClass("flex")
  }
  if ($(this).attr('id') == 'offer-agreement-button')
  {
    $(`#offer-agreement-modal`).addClass("flex")
  }
  if ($(`#confidentiality-modal`).hasClass("flex") || ($(`#offer-agreement-modal`).hasClass("flex"))) {
      $("body").addClass("overflow-no")
  }
});
///////////ВСЁ ЧТО ВЫШЕ - ДЛЯ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ И ДОГОВОРА-ОФЕРТЫ

$('.knopka').on('click', function () {
  var previewId = $(this).attr("preview-match")
  $(`#preview__modal${previewId}`).addClass("flex")
  $("body").addClass("overflow-no")
});

$(document).mouseup(function (e) { 
  var div = $(".popup__modal-block"); 
  var previewId = $(".knopka").attr("preview-match")
  if (!div.is(e.target) 
      &&
      div.has(e.target).length === 0) { 
        $("#confidentiality-modal").removeClass("flex");
        $("#offer-agreement-modal").removeClass("flex");
        $(`#preview__modal${previewId}`).removeClass("flex");
        $("body").removeClass("overflow-no")
  }
});