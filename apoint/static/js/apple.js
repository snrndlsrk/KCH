document.addEventListener("DOMContentLoaded", function() {
    // chatbot-toggle 클릭 이벤트 핸들러
    document.getElementById("chatbot-toggle").addEventListener("click", function() {
        // chat-box 클래스를 갖고 있는 요소를 찾음
        var chatBox = document.querySelector(".chat-box");
        
        // chat-box 요소가 보이지 않을 경우 보이도록 설정
        if (chatBox.style.display === "none") {
            chatBox.style.display = "block";
        } else {
            chatBox.style.display = "none";
        }
    });
    
    var INDEX = 0; 
    document.getElementById("chat-submit").addEventListener("click", function(e) {
        e.preventDefault();
        var msg = document.getElementById("chat-input").value; 
        if (msg.trim() === '') {
            return false;
        }
        generate_message(msg, 'self');
        var buttons = [
            {
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];
        setTimeout(function() {      
            generate_message(msg, 'user');  
        }, 1000);
    });
    
    function generate_message(msg, type) {
        INDEX++;
        var chatLogs = document.querySelector(".chat-logs");
        
        var div = document.createElement("div");
        div.id = "cm-msg-" + INDEX;
        div.className = "chat-msg " + type;
        
        var msgAvatar = document.createElement("span");
        msgAvatar.className = "msg-avatar";
        var img = document.createElement("img");
        img.src = "./image/chat.png";
        msgAvatar.appendChild(img);
        
        var cmMsgText = document.createElement("div");
        cmMsgText.className = "cm-msg-text";
        cmMsgText.innerText = msg;
        
        div.appendChild(msgAvatar);
        div.appendChild(cmMsgText);
        
        chatLogs.appendChild(div);
        fadeInElement(div);
        
        if (type === 'self') {
            document.getElementById("chat-input").value = ''; 
        }
        
        scrollToBottom(chatLogs);
    }
    
    function fadeInElement(element) {
        element.style.opacity = 0;
        var tick = function() {
            element.style.opacity = +element.style.opacity + 0.01;
            if (+element.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }
    
    function scrollToBottom(element) {
        element.scrollTop = element.scrollHeight;
    }
    
    document.addEventListener("click", function(event) {
        var target = event.target;
        if (target.classList.contains("chat-btn")) {
            var value = target.getAttribute("chat-value");
            var name = target.innerHTML;
            document.getElementById("chat-input").disabled = false;
            generate_message(name, 'self');
        }
    });
    
    document.getElementById("chat-circle").addEventListener("click", function() {    
        document.getElementById("chat-circle").style.display = "none";
        document.querySelector(".chat-box").style.display = "block";
    });
    
    document.querySelector(".chat-box-toggle").addEventListener("click", function() {
        document.getElementById("chat-circle").style.display = "block";
        document.querySelector(".chat-box").style.display = "none";
    });
});