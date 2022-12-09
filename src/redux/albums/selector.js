export const selectAlbumsLoading = (state) => state.albums.loading
export const selectAlbumsError = (state) => state.albums.error
export const selectAlbumsData = (state) => state.albums.albums

export const selectAlbumsState = (state) => state.albums

export const selectAlbumById = (id) => (state) => state.albums.albums.find((u) => u.id === id)
