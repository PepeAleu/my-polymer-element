Polymer({
  is: "avatar-element",
  properties: {
    /**
     * The input name.
     */
    name: {
      type: String,
      value: 'Avatar Profile'
    },
    /**
     * Specify the img url
     */
    src: String,
    /**
     * Specify the img width
     */
    width: {
      type: String,
      value: '200px'
    },
    /**
     * Specify the img height
     */
    height: {
      type: String,
      value: '200px'
    },
  },
});
