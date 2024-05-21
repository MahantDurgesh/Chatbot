let category_btn;
let emotion;
let count =0;
class_btn = document.getElementsByClassName("inbox");
btn_class = document.getElementsByClassName("btn");
$(Document).ready(function() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},
        tmp;
    if (params.length != 0) {
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[i] = tmp;
            Array.from(class_btn).forEach(index => {
                index.style.display = "none";
            });
            Array.from(btn_class).forEach(index => {
                index.style.display = "none";
            });
        }
        showup()
        $("body").append('<div class="real-bot"><Button class="btn btn-danger" onclick=window.open("http://localhost/ChatApp/")>Real Time Person</Button></div>')
        console.log((data[1][1].split('%20')))
        if (data[0][1].localeCompare('happy') == 0) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Hey, what is the reason behind your happiness,</p></div></div>')
        } else if (data[0][1].localeCompare('sad') == 0) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Hey,what happen why are you sad</p></div></div>')
        } else if (data[0][1].localeCompare('angry') == 0) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Hey,what happen why are you angry</p></div></div>')
        } else if (data[0][1].localeCompare('obsessed') == 0) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Are you dealing from depression</p></div></div>')
        } else if ((data[0][1].localeCompare('surprised') == 0) || (data[0][1].localeCompare('fearful') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Sorry as a chatbot i cant help you with your emotion. please try to connect with a real time person</p></div></div>')
        } else {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Why are you feeling like this?</p></div></div>')
        }
        if ((data[1][1].localeCompare('Customer%20service') == 0) && (data[0][1].localeCompare('happy') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>So are you happy with our service?</p></div></div>')

        } else if ((data[1][1].localeCompare('Customer%20service')) && ((data[0][1].localeCompare('angry')) || (data[0][1].localeCompare('sad')))== 0) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>are\'nt you happy with our customer with our service</p></div></div>')

        } else if ((data[1][1].localeCompare('Friendly') == 0) && (data[0][1].localeCompare('happy') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>its your birthday today or you got succeeded in your work today</p></div></div>')

        } else if ((data[1][1].localeCompare('Friendly') == 0) && (data[0][1].localeCompare('angry') == 0) || (data[0][1].localeCompare('sad') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>your day is not going well or you did\'nt succeeded in your work today</p></div></div>')

        } else if ((data[1][1].localeCompare('Human%20resources') == 0) && (data[0][1].localeCompare('happy') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>you recieved your salary or you got promotion or you got selected for interview call</p></div></div>')

        } else if ((data[1][1].localeCompare('Human%20resources') == 0) && (data[0][1].localeCompare('angry') == 0) || (data[0][1].localeCompare('sad') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>you din\'nt received your salary this month</p></div></div>')

        } else if ((data[1][1].localeCompare('Branding') == 0) && (data[0][1].localeCompare('happy') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Are you happy with our product hope the condition of the product is well and it\'s working properly</p></div></div>')

        } else if ((data[1][1].localeCompare('Branding') == 0) && (data[0][1].localeCompare('angry') == 0) || (data[0][1].localeCompare('sad') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>did you received damaged or nonfunctioninng product or you are not finding any product you are searching for?</p></div></div>')

         } else if ((data[1][1].localeCompare('Medical%20field') == 0) && (data[0][1].localeCompare('happy') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>Are you happy with our product hope the condition of the product is well and it\'s working properly</p></div></div>')

        } else if ((data[1][1].localeCompare('Medical%20field') == 0) && (data[0][1].localeCompare('sad') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>you are feeling well</p></div></div>')

        } else if ((data[1][1].localeCompare('Medical%20field') == 0) && (data[0][1].localeCompare('angry') == 0)) {
            $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>you are feeling well or you are having major headache</p></div></div>')

        }

        $("#send-btn").on("click", function() {
            $value = $("#data").val();
            $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>' + $value + '</p></div></div>';
            $(".form").append($msg);
            $("#data").val('');
            // start ajax
            $.ajax({
                url: 'http://localhost/emotion_data.php',
                type: 'POST',
                data: { text: $value, cat_btn: (data[1][1].split('%20')[0]).toLowerCase() },
                success: function(result) {
                    $replay = ' <div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>' + result + '</p></div></div>';
                    $(".form").append($replay);
					getMessages();
				}

            })
        });
    } else {
        $("#send-btn").on("click", function() {
            $value = $("#data").val();
            $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>' + $value + '</p></div></div>';
            $(".form").append($msg);
            $("#data").val('');
            // start ajax
            $.ajax({
                url: 'http://localhost/mess.php',
                type: 'POST',
                data: 'text=' + $value,
                success: function(result) {
                    $replay = ' <div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>' + result + '</p></div></div>';
                    $(".form").append($replay);
					getMessages();
                }
            })
        });
    }
});
function getMessages() {
	// Prior to getting your messages.
  shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your messages.
  if (!shouldScroll) {
    scrollToBottom();
  }
}
function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

function getMessages() {
	// Prior to getting your messages.
  shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your messages.
  if (!shouldScroll) {
    scrollToBottom();
  }
}
function getcategory(btn_id) {
    category_btn = document.getElementById(btn_id).innerHTML
    $('#concert-modal').modal('show')
    modal_doc = document.getElementsByClassName('modal-body')[0].innerHTML = "You have selected " + category_btn + ".<br>Can you allow camera access of your device?";
}

function face_api() {
    $('#concert-modal').modal('hide')
    Array.from(class_btn).forEach(index => {
        index.style.display = "none";
    });
    Array.from(btn_class).forEach(index => {
        index.style.display = "none";
    });
    location.replace('http://localhost/face_api/index.html?category_btn=' + encodeURIComponent(category_btn))
}
function showup()
{
if(count==0)
{     document.getElementsByClassName('wrapper')[0].classList.remove('hidden');
count =1;}
else{
    count=0;
    document.getElementsByClassName('wrapper')[0].classList.add('hidden');
  }

}