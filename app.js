const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
        {
          id: "leon",
          name: "Leon Lubberdink",
          phone: "0157 320 82626",
          email: "leon@localhost.com",
        },
      ],
    };
  },
});

app.component("contact-card", {
  template: `
    <li :key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsVisibile ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsVisibile">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsVisibile: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibile = !this.detailsVisibile;
    },
  },
});

app.mount("#app");
