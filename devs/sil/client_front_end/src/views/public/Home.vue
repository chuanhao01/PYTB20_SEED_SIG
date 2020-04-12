<template>
  <div class="home mx-auto mt-5">
    <!-- <h1>Hi, {{ account.user.fullname }}!</h1> -->
    <h1>List of Events</h1>

    <event-box></event-box>

    <!-- <h1>meow</h1> -->
    <!-- <p class="display-1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officiis. Tenetur, nemo ipsam quis, voluptatem dolorem iste tempora repellat delectus impedit totam ab vitae earum rem ad! Necessitatibus, laboriosam rerum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officiis. Tenetur, nemo ipsam quis, voluptatem dolorem iste tempora repellat delectus impedit totam ab vitae earum rem ad! Necessitatibus, laboriosam rerum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officiis. Tenetur, nemo ipsam quis, voluptatem dolorem iste tempora repellat delectus impedit totam ab vitae earum rem ad! Necessitatibus, laboriosam rerum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officiis. Tenetur, nemo ipsam quis, voluptatem dolorem iste tempora repellat delectus impedit totam ab vitae earum rem ad! Necessitatibus, laboriosam rerum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam similique quasi rem sapiente quibusdam ut cupiditate autem doloremque facere praesentium, fugiat minima totam corrupti eaque explicabo nemo nostrum? Error.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum! LOL
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum odit autem, tenetur sequi ut dolore, voluptatibus hic rerum doloremque ipsam! Quibusdam sapiente at modi maiores, veniam tenetur cumque rerum! lol
    </p>
    <h1>hello</h1> -->
  </div>
</template>

<script>
import EventBox from "@/components/EventBox.vue";
import { mapState } from "vuex";

export default {
  components: {
    "event-box": EventBox
  },
  data() {
    return {
      // events
    };
  },
  computed: {
    ...mapState({
      account: state => state.account,
      status: state => state.events.filter.status
    })
  },
  created() {
    // this.getAllUsers();
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  width: 80%;
}

.filter-all-btn {
  &:hover {
  }
}

@media only screen and (max-width: 600px) {
  .home {
    width: 100%;
  }
}
</style>
