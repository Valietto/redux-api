export const selectUsersLoading = (state) => state.users.loading
export const selectUsersError = (state) => state.users.error
export const selectUsersData = (state) => state.users.users

export const selectUsersState = (state) => state.users

export const selectUserById = (id) => (state) => state.users.users.find((u) => u.id === id)
