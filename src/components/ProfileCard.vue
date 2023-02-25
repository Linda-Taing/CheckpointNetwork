<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                Welcome To The Profile!
                {{ post.creator.name }}
            </div>
        </div>
    </div>
</template>


<script>
import { Post } from '../models/Post.js';
export default {
    props:{
        post:{type: Post,
        }
    },
   
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>