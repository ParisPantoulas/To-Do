<template>
  <nav class="navigation">
    <div id="menu">      
      <ul>
        <li>
          <router-link :to="{ name: 'home'}" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Addplan'}" class="nav-link">Add Plan</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navigation {
    background-color: #415569; /* Change the background color to your preference */
    padding: 10px;
    border-radius: 8px;
  }

  #menu {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  .nav-link {
    text-decoration: none;
    color: #ecf0f1; /* Change the text color to your preference */
    font-weight: bold;
    font-size: 18px;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: rgb(145, 115, 192);
  }

  a.router-link-active{
    color: #d4b6e5; /* Change the text color to your preference */
    font-weight: bold;
  }
</style>