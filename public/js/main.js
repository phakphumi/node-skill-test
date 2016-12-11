//click to send data to server
$('#submitGit').click(function(){
    var user = $('#username').val();
    
    $.ajax({
        url: "./request",
        data: {
            username: user
        }
    })
    .done(function( msg ) {
        msg = JSON.parse(msg);
        //remove old table data
        $( "#followerTable tr" ).remove();
        //insert new table data
        $( "#followerTable" ).append("<tr>" +
                                        "<th>Avatar</th>" +
                                        "<th>Login</th>" +
                                        "<th>Url</th>" +
                                    "</tr>"
                                    );
        msg.forEach(function (user) {
            $( "#followerTable" ).append("<tr>" +
                                            "<td>"+
                                                "<img src='"+user.avatar_url+"' alt='Github Avatar' height='auto' width='100%'>" +
                                            "</td>" +
                                            "<td>"+user.login+"</td>" +
                                            "<td>"+user.html_url+"</td>" +
                                        "</tr>"
                                        );
        });
        // console.log(msg);
    });
});