<template>
  <div class="navbar">
    <ul>
      <li class="nav-item" id="logo">
        <router-link to="/" class="nav-link">
          <span>
            <strong>SINGAPORE</strong> YOUTH <strong>FOR</strong> CHRIST
          </span>
        </router-link>
      </li>
      <li class="nav-item">
        <button class="navbar-toggler" type="button" @click="openNav">
          <div class="animated-icon" :class="{ open: isOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <strong>Home</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          <strong>Login</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup" class="nav-link">
          <strong>Sign Up</strong>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openNav: () => {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Muli|Open+Sans|Playfair+Display:700i&display=swap");
// fonts:
// font-family: 'Open Sans', sans-serif;
// font-family: 'Muli', sans-serif;
// font-family: 'Playfair Display', serif;

:root {
  // TEXT
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  --text-primary: #000;
  --text-secondary: #3c424f;
  --text-secondary-variant: #8e9dae;
  // LINK
  --dropdown-link: #6b7c93;
  --link: #03a9f4;
  --link-hover: #2ebcfc;
  // Background
  --bg-primary: #fff;
  --bg-secondary: #f5fafd;
}

.navbar {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    .nav-item {
      &:first-child {
        margin-right: auto;
        margin-left: 1.5rem;
        display: flex;
        flex-basis: auto;
        flex-grow: 0;
        .nav-link {
          flex-wrap: wrap;
          text-transform: uppercase;
        }
      }
      .nav-link {
        display: flex;
        align-items: center;
        height: 5rem;
        text-decoration: none;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .navbar-toggler {
    .animated-icon {
      span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 10px;
        }

        &:nth-child(4) {
          top: 20px;
        }
      }

      .open span:nth-child(1) {
        top: 11px;
        width: 0%;
        left: 50%;
      }

      .open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      .open span:nth-child(4) {
        top: 11px;
        width: 0%;
        left: 50%;
      }
    }
  }
  .nav-item {
    display: none;
    //   pull logo to the left
    &:first-child {
      max-width: 70%;
      .nav-link {
        font-size: 20px;
        &:hover {
          color: var(--text-primary);
        }
      }
    }
    &:last-child {
      margin-right: 10rem;
    }
    .nav-link {
      color: var(--text-primary);
      font-size: 18px;
    }
  }
}

@media only screen and (min-width: 600px) {
  .nav-item {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-align: left;
    //   pull logo to the left
    &:first-child {
      max-width: 30%;
      flex-basis: auto;
      flex-grow: 0;
      .nav-link {
        font-size: 25px;
        &:hover {
          color: var(--text-primary);
        }
      }
    }

    &:last-child {
      margin-right: 8rem;
    }
    .nav-link {
      color: var(--text-primary);
      font-size: 18px;

      &:hover {
        color: var(--link);
        transition: color 200ms ease;
      }
    }
  }
}
</style>
