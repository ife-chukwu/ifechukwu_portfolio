import { createSlice } from "@reduxjs/toolkit";

export const images = [
  "https://wallpapers.com/images/high/windows-11-tiger-6xf4exumtu44nga3.webp",
  "https://wallpapers.com/images/high/aesthetic-anime-background-digital-art-seh7w8xia8u1i0tb.webp",
  "https://wallpapers.com/images/high/windows-11-island-boat-ykkuk3khvbv88xdh.webp",
  "https://wallpapers.com/images/high/magical-tree-digital-art-pxumkoqlog66akud.webp",
  "https://wallpapers.com/images/high/windows-11-green-city-view-8u7wos5fd1ldy75n.webp",
  "https://wallpapers.com/images/high/enchanted-tree-digital-art-h2w3zb4jb8ykni0a.webp",
  "https://wallpapers.com/images/high/windows-11-royal-entrance-dcpa6lq3flhpv132.webp",
  "https://wallpapers.com/images/high/windows-11-sunset-river-p338ziv0ywmtwlnd.webp",
  "https://wallpapers.com/images/high/windows-11-3d-fluid-kn5e515oegsp5ee0.webp",
  "https://wallpapers.com/images/high/windows-11-laptop-patio-dvszr9zqp1vmn7sg.webp",
  "https://wallpapers.com/images/high/tower-in-forest-digital-art-3yzduk4b01ahu06q.webp",
  "https://wallpapers.com/images/high/pink-highway-digital-art-11dugdw8fbcxauo3.webp",
  "https://wallpapers.com/images/hd/digital-abstract-paint-blob-art-0na2yakeez7la7pw.webp",
];

export const profileImages = [
  "/Profile/profile1.jpeg",
  "/Profile/profile2.jpeg",
  "/Profile/profile3.jpeg",
  "/Profile/profile4.jpeg",
];

const initialState = {
  currentIndex: 0,
  currentProfile: 0,
};

export const imageSlider = createSlice({
  name: "background-image",
  initialState,

  reducers: {
    slider: (state) => {
      state.currentIndex = (state.currentIndex + 1) % images.length;
    },
    profileSlider: (state) => {
      state.currentProfile = (state.currentProfile + 1) % profileImages.length;
    },
  },
});

export const { slider, profileSlider } = imageSlider.actions;

export default imageSlider.reducer;
