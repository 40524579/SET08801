document.addEventListener('DOMContentLoaded', function() 
{

	// Check for fresh start flag
	if (sessionStorage.getItem('freshStart') === 'true') 
	{
		// Clear the flag
		sessionStorage.removeItem('freshStart');
		
		// Force clear any localStorage items that might have been missed
		localStorage.clear();
		
		console.log('Fresh game started');
	}
	

	// Initial animation for text appearance
	const storyText = document.querySelector('.story-text');
	storyText.style.opacity = '0';
	setTimeout(() => {
		storyText.style.transition = 'opacity 1.5s ease';
		storyText.style.opacity = '1';
	}, 300);
	

	// Adding event listeners to choice buttons
	const choiceButtons = document.querySelectorAll('.choice-btn');
	choiceButtons.forEach(button => {
		button.addEventListener('click', function() 
		{
			// Save choice to local storage (will be expanded in full implementation)
			localStorage.setItem('lastChoice', this.id);
			
			// Animation for button selection
			this.style.backgroundColor = '#462f27';
			this.style.transform = 'scale(0.98)';
			
			// In full implementation, this would navigate to the next story segment
			setTimeout(() => {
				alert(`You chose to ${this.textContent}. This path will be implemented in the full version.`);
			}, 300);
		});
	});
	

	// Menu functionality
	const menuButton = document.getElementById('menuButton');
	const sideMenu = document.getElementById('sideMenu');
	const closeMenu = document.getElementById('closeMenu');
	const overlay = document.getElementById('overlay');

	menuButton.addEventListener('click', function() 
	{
		sideMenu.style.left = '0';
		overlay.style.display = 'block';
	});

	closeMenu.addEventListener('click', function() 
	{
		sideMenu.style.left = '-300px';
		overlay.style.display = 'none';
	});
	

	// Settings functionality
	const settingsButton = document.getElementById('settingsButton');
	const settingsPanel = document.getElementById('settingsPanel');
	const closeSettings = document.getElementById('closeSettings');

	settingsButton.addEventListener('click', function() 
	{
		settingsPanel.style.right = '0';
		overlay.style.display = 'block';
	});

	closeSettings.addEventListener('click', function() 
	{
		settingsPanel.style.right = '-400px';
		overlay.style.display = 'none';
	});

	overlay.addEventListener('click', function() 
	{
		sideMenu.style.left = '-300px';
		settingsPanel.style.right = '-400px';
		overlay.style.display = 'none';
	});
	

	// Menu item functionality
	document.getElementById('newGame').addEventListener('click', function(e) 
	{
		e.preventDefault();
		if (confirm('Start a new game? Any unsaved progress will be lost.')) 
		{					
			// Clear all game data from storage
			localStorage.removeItem('gameState');
			localStorage.removeItem('inventory');
			localStorage.removeItem('journal');
			localStorage.removeItem('lastChoice');
			localStorage.removeItem('gameProgress');

			// Set a session flag to indicate a fresh start
			sessionStorage.setItem('freshStart', 'true');
			
			// Redirect to clean URL
			window.location.href = window.location.pathname;
		}
	});

	document.getElementById('loadGame').addEventListener('click', function(e) 
	{
		e.preventDefault();
		if(localStorage.getItem('gameProgress')) {
			alert('Game loaded successfully!');
		} else {
			alert('No saved game found.');
		}
	});

	document.getElementById('saveGame').addEventListener('click', function(e) 
	{
		e.preventDefault();
		const gameState = {
			lastChoice: localStorage.getItem('lastChoice'),
			timestamp: new Date().toLocaleString()
		};
		localStorage.setItem('gameProgress', JSON.stringify(gameState));
		alert('Game saved successfully!');
	});
	

	// Settings sliders functionality
	const fontSizeSlider = document.getElementById('fontSize');
	const fontSizeValue = document.getElementById('fontSizeValue');
	
	fontSizeSlider.addEventListener('input', function() 
	{
		fontSizeValue.textContent = this.value + '%';
	});

	const musicVolumeSlider = document.getElementById('musicVolume');
	const musicVolumeValue = document.getElementById('musicVolumeValue');
	
	musicVolumeSlider.addEventListener('input', function() 
	{
		musicVolumeValue.textContent = this.value + '%';
	});

	const soundEffectsSlider = document.getElementById('soundEffects');
	const soundEffectsValue = document.getElementById('soundEffectsValue');
	
	soundEffectsSlider.addEventListener('input', function() 
	{
		soundEffectsValue.textContent = this.value + '%';
	});

	const textSpeedSlider = document.getElementById('textSpeed');
	const textSpeedValue = document.getElementById('textSpeedValue');
	
	textSpeedSlider.addEventListener('input', function() 
	{
		const speeds = ['Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast'];
		textSpeedValue.textContent = speeds[this.value - 1];
	});
	

	// Apply Settings
	document.getElementById('applySettings').addEventListener('click', function() 
	{
		// Font size
		const fontSize = fontSizeSlider.value;
		/*document.body.style.fontSize = fontSize + '%';*/
		document.documentElement.style.setProperty('--base-font-size', fontSize + '%');
		
		// Dark mode
		const darkMode = document.getElementById('darkMode').checked;
		if(darkMode) 
		{
			document.body.style.backgroundColor = '#1a1a1a';
			document.body.style.color = '#f0f0f0';
			document.querySelector('.story-text').style.backgroundColor = 'rgba(40, 40, 40, 0.9)';
			document.querySelector('.story-text').style.color = '#f0f0f0';
			document.body.classList.add('dark-mode');
		} 
		else 
		{
			document.body.style.backgroundColor = '#f5f1e8';
			document.body.style.color = '#2a2422';
			document.querySelector('.story-text').style.backgroundColor = 'rgba(248, 245, 240, 0.9)';
			document.querySelector('.story-text').style.color = '#2a2422';
			document.body.classList.remove('dark-mode');
		}
		
		// Save settings to localStorage
		const settings = {
			fontSize: fontSize,
			darkMode: darkMode,
			musicVolume: musicVolumeSlider.value,
			soundEffects: soundEffectsSlider.value,
			muteAll: document.getElementById('muteAll').checked,
			textSpeed: textSpeedSlider.value,
			autoSave: document.getElementById('autoSave').checked
		};
		
		localStorage.setItem('gameSettings', JSON.stringify(settings));
		
		alert('Settings applied and saved!');
	});
	

	// Reset Settings
	document.getElementById('resetSettings').addEventListener('click', function() 
	{
		if(confirm('Reset all settings to default?')) 
		{
			fontSizeSlider.value = 100;
			fontSizeValue.textContent = '100%';
			
			document.getElementById('darkMode').checked = false;
			
			musicVolumeSlider.value = 70;
			musicVolumeValue.textContent = '70%';
			
			soundEffectsSlider.value = 80;
			soundEffectsValue.textContent = '80%';
			
			document.getElementById('muteAll').checked = false;
			
			textSpeedSlider.value = 3;
			textSpeedValue.textContent = 'Normal';
			
			document.getElementById('autoSave').checked = true;
			
			// Reset visual settings
			document.body.style.fontSize = '100%';
			document.body.style.backgroundColor = '#f5f1e8';
			document.body.style.color = '#2a2422';
			document.querySelector('.story-text').style.backgroundColor = 'rgba(248, 245, 240, 0.9)';
			document.querySelector('.story-text').style.color = '#2a2422';
			
			localStorage.removeItem('gameSettings');
			
			alert('Settings reset to default!');
		}
	});
	

	// Load saved settings if available
	if(localStorage.getItem('gameSettings')) 
	{
		const savedSettings = JSON.parse(localStorage.getItem('gameSettings'));
		
		fontSizeSlider.value = savedSettings.fontSize;
		fontSizeValue.textContent = savedSettings.fontSize + '%';
		
		document.getElementById('darkMode').checked = savedSettings.darkMode;
		
		musicVolumeSlider.value = savedSettings.musicVolume;
		musicVolumeValue.textContent = savedSettings.musicVolume + '%';
		
		soundEffectsSlider.value = savedSettings.soundEffects;
		soundEffectsValue.textContent = savedSettings.soundEffects + '%';
		
		document.getElementById('muteAll').checked = savedSettings.muteAll;
		
		textSpeedSlider.value = savedSettings.textSpeed;
		const speeds = ['Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast'];
		textSpeedValue.textContent = speeds[savedSettings.textSpeed - 1];
		
		document.getElementById('autoSave').checked = savedSettings.autoSave;
		
		// Apply visual settings
		if(savedSettings.darkMode) 
		{
			document.body.style.backgroundColor = '#1a1a1a';
			document.body.style.color = '#f0f0f0';
			document.querySelector('.story-text').style.backgroundColor = 'rgba(40, 40, 40, 0.9)';
			document.querySelector('.story-text').style.color = '#f0f0f0';
		}
		
		document.body.style.fontSize = savedSettings.fontSize + '%';
	}
	

	// Check if returning player
	if (localStorage.getItem('lastChoice')) 
	{
		const welcomeBack = document.createElement('p');
		welcomeBack.textContent = 'Welcome back to your adventure. Would you like to continue where you left off?';
		welcomeBack.style.fontStyle = 'italic';
		welcomeBack.style.marginTop = '1rem';
		welcomeBack.style.color = '#614535';
		storyText.appendChild(welcomeBack);
	}
});	
