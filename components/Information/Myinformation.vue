<template>
  <aside class="aside_part">
    <div class="aside__1">
      <MyIcon name="Clock" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong"
        >Today 10:00am - 10:00pm</MyTitle
      >
      <p>Working time</p>
    </div>
    <div class="aside__2">
      <MyIcon name="Localisation" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong"
        >Washington, D.C., DC,USA
      </MyTitle>
      <p>Our Location</p>
    </div>
    <div class="aside__3">
      <MyIcon name="Call" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong">+0123 456 7891</MyTitle>
      <p>Phone Number</p>
    </div>
  </aside>
</template>
<style lang="scss" scooped>
.aside_part {
  display: flex;
  justify-content: space-around;
  .aside__1,
  .aside__2,
  .aside__3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .aside__2 {
    border-left: 2px solid $gray;
    border-right: 2px solid $gray;
    padding-inline: 5%;
  }
}
</style>
