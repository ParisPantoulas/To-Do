<template>
<nav class="navigation">
  <div id="menuToggle"> 
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <li>
        <router-link :to="{ name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Addplan'}">Add plan</router-link>
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
 body
{
  margin: 0;
  padding: 0;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

.navigation {
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 100vh
}

#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  z-index: 1;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: rgb(145, 115, 192);
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -15px;
  cursor: pointer;
  opacity: 0;
  z-index: 2; 
}

#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: rgb(91, 91, 180);
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 115px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  
  background:  rgb(91, 91, 180);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s;
}

#menu li
{
  padding: 10px 0;
  font-size: 20px;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

</style>