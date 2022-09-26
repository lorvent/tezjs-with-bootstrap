<script>
export default {
  layoutName: "default",
  head: {
    title: "tezjs: Bootstrap Integration",
  },
  data() {
    return {
      products: [
        {
          id: 1,
          Name: "T-shirts",
          Description: "Cool t-shirts for men",
          Price: "250",
          image: "../assets/images/t-shirt.jpg",
        },
        {
          id: 2,
          Name: "Water Bottle",
          Description: "Yellow bottle for your favourite one",
          Price: "250",
          image: "../assets/images/bootle.jfif",
        },
        {
          id: 3,
          Name: "School Bags",
          Description: "Cool Bags for students",
          Price: "250",
          image: "../assets/images/schoolbag.jfif",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="jumbotron">
    <div class="container text-center">
      <h1 class="text-Danger mt-2">Buy Products which you love</h1>
      <p>Mission, Vission & Values</p>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-4 mt-3"
        v-for="product in products"
        :key="product.id"
      >
        <div class="panel panel-primary text-center">
          <div
            class="panel-heading bg-dark border border-warning rounded text-white text-center"
          >
            {{ product.Name }}
          </div>
          <div class="panel-body d-flex ustify-content-center mt-3">
            <img
              :src="product.image"
              class="img-responsive"
              alt="Image"
              height=""
              width="350"
            />
          </div>
          <div class="panel-footer text-start ms-2">
            <h4 class="mt-3">Product Description</h4>
            {{ product.Description }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />

  <footer class="container-fluid text-center">
    <p>Online Store Copyright</p>
    <form class="form-inline">
      Get deals:
      <input type="email" class="form-control" size="50" placeholder="Email Address" />
      <button type="button" class="btn btn-danger mt-5">Sign Up</button>
    </form>
  </footer>
</template>

<style scoped>
.navbar {
  margin-bottom: 50px;
  border-radius: 0;
}

/* Remove the jumbotron's default bottom margin */
.jumbotron {
  margin-bottom: 0;
}

/* Add a gray background color and some padding to the footer */
footer {
  background-color: #c4dab6db;
  padding: 25px;
}
</style>
