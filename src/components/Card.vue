<template>
    <div class="cards_item">
        <div class="card">
          <div class="card_content">
            <div class="card_text">
              <p>{{text}}
              </p>
            </div>
            <div class="footer">
              <span>{{id}}</span>
              <span>{{new Date(created_at).toLocaleDateString('en-GB').replace(/\//g, '.')}}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['id', 'text', 'created_at'],
    data () {
      return {

      }
    },
    methods: {

    },
    watch: {

    },
    mounted() {
    }
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
}
.cards_item {
  cursor: pointer;
  width: 100%;
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

}
@media screen and (min-width:930px) {
  .cards_item.one {
    grid-area: 1 / 1 / 2 / 2;
  }
  .cards_item.two {
    grid-area: 1 / 2 / 2 / 3;
  }
}
@media screen and (min-width:1440px) {
  .cards_item.one {
    grid-area: 1 / 1 / 2 / 3;
  }
  .cards_item.two {
    grid-area: 1 / 3 / 2 / 5;
  }
}

.card_content {
  position: relative;
  padding: 10px 30px;
  margin: 16px 8px 8px 0;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  overflow: auto;
  flex-wrap: wrap;
  text-wrap: wrap;
}

.card_text p {
  margin: 0 0 24px;
  font-size: 14px;
  line-height: 1.5;
}

.card_text p:last-child {
  margin: 0;
}

</style>
