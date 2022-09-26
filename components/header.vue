<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
      <div class="container-fluid">
        <a>
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
            width="45"
            height="45"
            class="my-2"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav
                "
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <tez-link class="nav-link display-1" to="/">Home</tez-link>
            </li>

            <li class="nav-item">
              <tez-link class="nav-link display-1" to="/bootstrap">Bootstrap</tez-link>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/tezjs/tezjs"
                target="blank"
                class="nav-link display-1"
              >
                TezJS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
