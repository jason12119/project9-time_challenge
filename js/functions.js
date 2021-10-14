$(function () {
  var bill = parseInt($('#bill').val())
  var people = parseInt($('#people').val())
  var tip = parseInt($('.button.active').html())

  $('#bill').on('input', function () {
    $(this).addClass('active')
    $('#reset').addClass('active')
  })

  $('#people').on('input', function () {
    $(this).addClass('active')
    $('#reset').addClass('active')
  })

  $('#controls .group .buttons .button').on('click', function () {
    $('#controls .group .buttons .button').removeClass('active')
    $(this).addClass('active')

    var bill = parseInt($('#bill').val())
    var people = parseInt($('#people').val())
    var tip = parseInt($('.button.active').html())

    if (isNaN(bill)) {
      bill = 0
    }

    if (isNaN(people)) {
      people = 1
    }

    var total = bill / 100
    total = total * tip

    var tipAmount = total / people

    if (isNaN(total) || isNaN(tipAmount) || isFinite(tipAmount) == false) {
      total = 0
      tipAmount = 0
      $('#total').html(total.toFixed(2))
      $('#tipAmount').html(tipAmount.toFixed(2))
    }

    $('#total').html(total.toFixed(2))
    $('#tipAmount').html(tipAmount.toFixed(2))
  })

  $('#bill, #people').on('input', function () {
    var bill = parseInt($('#bill').val())
    var people = parseInt($('#people').val())
    var tip = parseInt($('.button.active').html())

    var total = bill / 100
    total = total * tip
    var tipAmount = total / people

    if (isFinite(tipAmount) == false) {
      tipAmount = 0
      total = 0
    }

    if (isNaN(total) == false && isNaN(tipAmount) == false) {
      $('#total').html(total.toFixed(2))
      $('#tipAmount').html(tipAmount.toFixed(2))
    }
  })

  $('#controls #custom').on('input', function () {
    tip = parseInt($(this).val())
    // if (isNaN(tip)) {
    //   tip = parseInt($('.button.active').html())

    //   if (isNaN(tip)) {
    //     tip = 0
    //   }
    // }
    var bill = parseInt($('#bill').val())
    var people = parseInt($('#people').val())

    var total = bill / 100
    total = total * tip

    var tipAmount = total / people

    $('#total').html(total.toFixed(2))
    $('#tipAmount').html(tipAmount.toFixed(2))
  })

  $('#reset').on('click', function () {
    $('#controls .group .buttons .button').removeClass('active')
    $('#bill').val('0').removeClass('active')
    $('#people').val('0').removeClass('active')
    $('#custom').val('').removeClass('active')
    $('#reset').removeClass('active')
    tipAmount = 0
    total = 0
    $('#total').html(total.toFixed(2))
    $('#tipAmount').html(tipAmount.toFixed(2))
  })
})
