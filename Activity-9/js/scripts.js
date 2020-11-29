$(function(){

    var data = [
    {
      id: 1,
      title: 'Time',
      body: 'Time you enjoy wasting, was not wasted.',
      author: 'John Lennon'
    },
    {
      id: 2,
      title: 'Pain',
      body:
        'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.',
      author: 'Marcus Aurelius'
    },
    {
      id: 3,
      title: 'Words',
      body:
        'Some people just have a way with words, and other people … oh … not have way.',
      author: 'Steve Martin'
    },
    {
      id: 4,
      title: 'Peace',
      body:
        'If everyone demanded peace instead of another television set, then there’d be peace.',
      author: 'John Lennon'
    },
    {
      id: 5,
      title: 'Art',
      body:
        'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
      author: 'Alfred North Whitehead'
    }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');
    var $modalDialog = $("#modal-dialog");
    var $newButton = $("#new-button");
    var $backdrop = $("#modal-backdrop");
    var $cancelButton = $("#cancel-button");
    var $quoteTitle = $("#edit-title-text");
    var $quoteContent = $("#edit-content-text");
    var $quoteAuthor  = $("#edit-author-text");
    var $saveButton = $("#save-button");
    var $errorTitleMessage = $("#edit-title-message");
    var $errorQuoteMessage = $("#edit-content-message");
    var $errorAuthorMessage = $("#edit-author-message");

    function openModal() {
        $modalDialog.addClass("visible");
        $backdrop.addClass("visible");
    }

    function closeModal(){
      $modalDialog.removeClass("visible");
      $backdrop.removeClass("visible");
      $quoteTitle.val("");
      $quoteContent.val("");
      $quoteAuthor.val("");
    }

    function saveContent(){
       var postId = 'post-' + (data.length+1);
       var $post = $('<section class ="post"></section>');
       var $title = $('<h2 class ="title"></h2>');
       var $body = $('<blockquote></blockquote>');
       var $author = $('<span class="author"></span>');
       var $navItem = $('<li></li>');

      $title.text($quoteTitle.val());
      $body.text($quoteContent.val());
      $author.text($quoteAuthor.val());

      $navItem.attr("id", (data.length+1));
      $navItem.text($quoteTitle.val());

      $post.attr("id", postId);
      $post.append($title);
      $post.append($body);
      $post.append($author);
      
      data.push($post);
      $posts.append($post);
      $nav.append($navItem);

      $navItem.on('click', function(){
          var id = $(this).attr('id');
          $posts.children().hide();
          $posts.find('#post-' + id).fadeIn();
      });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
    }

    function initPosts()
    {
        for (var i = 0; i < data.length; i++)
        {
            var postId = 'post-' + data[i].id,
            $post = $('<section class ="post"></section>'),
            $title = $('<h2 class = "title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function(){
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();

            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
            
        }
    }
    
   $newButton.on("click", function()
   {
     openModal();
     
   });

   $cancelButton.on("click", function(){
    closeModal();

   });

   $saveButton.on("click", function(){

    if(!$quoteTitle.val()){
        $errorTitleMessage.text("Please enter a title");
        $errorTitleMessage.addClass("visible");
        return;
       }else {
         $errorTitleMessage.removeClass("visible");
       }
       
       if(!$quoteContent.val()){
         $errorQuoteMessage.text("Please enter a quote");
         $errorQuoteMessage.addClass("visible");
          return;
       }else{
         $errorQuoteMessage.removeClass("visible");
       }

       if(!$quoteAuthor.val()){
         $errorAuthorMessage.text("Please enter the author.");
         $errorAuthorMessage.addClass("visible");
         return;
       }else{
         $errorAuthorMessage.removeClass("visible");
       }
      saveContent();
      closeModal();
       
   });
   
    initPosts();
});

