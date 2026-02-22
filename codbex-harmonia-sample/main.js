document.addEventListener('alpine:init', () => {
	Alpine.data('dashboard', () => ({
		sidebarCollapsed: false,
		sidebarPinned: false,
		sidebarSubOpen: true,
		activePage: 'dashboard',
		activeProject: 'alpha',
		menuPrefs: {
			compact: false,
			showHints: true,
			theme: 'system',
		},
		createDialogOpen: false,
		profile: {
			fullName: 'Jane Doe',
			emailLocal: 'jane',
			phone: '',
		},
		newUser: {
			username: '',
			email: '',
		},
		get profileEmail() {
			const local = (this.profile.emailLocal || '').trim();
			return local ? `${local}@example.com` : '';
		},
		saveProfile() {
			console.log('saveProfile', {
				fullName: this.profile.fullName,
				email: this.profileEmail,
				phone: this.profile.phone,
			});
		},
		resetProfile() {
			this.profile.fullName = '';
			this.profile.emailLocal = '';
			this.profile.phone = '';
		},
		createUser() {
			console.log('createUser', { ...this.newUser });
			this.newUser.username = '';
			this.newUser.email = '';
			this.createDialogOpen = false;
		},
	}));
});
