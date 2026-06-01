<template>
  <div class="about-container">
    <div class="about">
      <img
        class="absolute"
        src="../assets/vector.png"
        alt="vector"
        width="90"
      />
      <p>Valentin LUGINBÜHL</p>
      <h1>DEVELOPER & DESIGNER</h1>
      <div class="student"><p>(Student)</p></div>
    </div>
    <div class="about-description">
      <p>
        Dolore eu amet est esse irure et labore velit. In sunt reprhenderit nisi aliqua et ex
        voluptate magnae laborum qui ea ad dolor Lorem. Pariatur qui velit ut in deserunt et nisi
        qui in eu irure exercitation. Mollit tempor exercitation adipisicing tempor elit amet enim
        id consequat incididunt. Et anim non commodo nisi aliquip. Velit elit magna elit nulla ea
        fugiat laboris elit sunt in nostrud nisi.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  width: calc(100% - var(--padding) * 2);
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  gap: var(--gap);
}

.about {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  margin: -2px -12px;
}

.student {
  display: flex;
  justify-content: end;
  margin-top: -0.2rem;
}

.about-description {
  width: 100%;
}
</style>
