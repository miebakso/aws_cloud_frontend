<script setup>

const data = {
    'posts': [
        { 
            'id': 0,
            'title': 'Post 1 Title',
            'img': 'img url',
            'user_id': 1,
            'username': 'Matthew Ariel',
            'likes': 100,
            'date': '2022-02-01',
            'content': 'asdasd asd asd asd asd asd asd asd asd asd asd asd asd a'
        },
    ],
    'comments': [
        {
            'id': 0,
            'date': '2022-02-01',
            'username': 'miebakso',
            'user_id': 0,
            'content': 'asdasd asdasd asd asd asd asd asd asd'
        },
        {
            'id': 0,
            'date': '2022-02-01',
            'username': 'miebakso',
            'user_id': 0,
            'message': 'asdasd asdasd asd asd asd asd asd asd'
        },
        {
            'id': 0,
            'date': '2022-02-01',
            'username': 'miebakso',
            'user_id': 0,
            'message': 'asdasd asdasd asd asd asd asd asd asd'
        }   
    ]
}
</script>

<template>
<div class="row justify-content-center">
    <div class="row">
        <div class="col-md-3 custom-chat">
            <form>
                <div class="form-group">
                <h4>Message</h4>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <button class="button-custom btn btn-lg btn-outline-success">Send </button>
            </form>
        </div>
    </div>

    <div class="col-md-6 ">
        <div v-for="post in data['posts']" :key="post.id">
            <div class="custom-card card" >
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="card-img-top" alt="">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                        <h5 class="card-title">{{post.title}}</h5>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-md-7">
                            <b>{{post.username}}</b>
                        </div>
                        <div class="col-md-2 d-flex justify-content-end">
                            <div><i class="fa-solid fa-heart"></i>{{post.likes}}</div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-end">
                            <p>{{post.date}}</p>
                        </div>
                    </div>
                    <div class="row custom-comment">
                        <p>{{post.content}} asdasdas ads das dasd asd asd asd asd asd asd asd asd asd as</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="comment in data['comments']" :key="comment.id">
            <div class="custom-card card" >
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                        <h7 class="card-title">{{comment.username}}</h7>
                        </div>
                        <div class="col-md-4 text-right d-flex justify-content-end">
                            <p>{{comment.date}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <p>{{comment.message}} asdasdas ads das dasd asd asd asd asd asd asd asd asd asd as</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.custom-card {
    margin-top: 20px;
}
.custom-comment {
    margin-top: 10px;
}
.custom-chat {
    position:fixed;
    bottom:0;
    right: 5px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: 3px solid #189407;
    padding: 10px;
}
.button-custom {
    margin-top: 10px;

}

</style>
