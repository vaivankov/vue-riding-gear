<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="warning mr-2" dark text v-bind="attrs" v-on="on"
          >Edit</v-btn
        >
      </template>
      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h2 class="text--primary">Edit card</h2>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field
                  name="title"
                  label="Title"
                  type="text"
                  v-model="editedTitle"
                ></v-text-field>
                <v-text-field
                  name="price"
                  label="Price"
                  type="text"
                  v-model="editedPrice"
                ></v-text-field>
                <v-text-field
                  name="previewImage"
                  label="Preview image"
                  type="text"
                  v-model="editedPreviewImage"
                ></v-text-field>
                <v-text-field
                  name="fullImage"
                  label="Full image"
                  type="text"
                  v-model="editedFullImage"
                ></v-text-field>
                <v-textarea
                  name="description"
                  label="Description"
                  type="text"
                  v-model="editedDescription"
                ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onCancel">Cancel</v-btn>
                <v-btn class="success" text @click="onSave">Save</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      editedDescription: this.ad.description,
      editedTitle: this.ad.title,
      editedPrice: this.ad.price,
      editedPreviewImage: this.ad.previewImage,
      editedFullImage: this.ad.fullImage,
    };
  },
  methods: {
    onCancel() {
      this.editedDescription = this.ad.description;
      this.editedTitle = this.ad.title;
      this.editedPrice = this.ad.price;
      this.editedPreviewImage = this.ad.previewImage;
      this.editedFullImage = this.ad.fullImage;
      this.modal = false;
    },
    onSave() {
      this.$store.dispatch("updateAd", {
        title: this.editedTitle !== "" ? this.editedTitle : this.ad.title,
        description:
          this.editedDescription !== ""
            ? this.editedDescription
            : this.ad.description,
        price: this.editedPrice !== "" ? this.editedPrice : this.ad.price,
        previewImage:
          this.editedPreviewImage !== ""
            ? this.editedPreviewImage
            : this.ad.previewImage,
        fullImage:
          this.editedFullImage !== ""
            ? this.editedFullImage
            : this.ad.fullImage,
        id: this.ad.id,
      });

      this.modal = false;
    },
  },
};
</script>
