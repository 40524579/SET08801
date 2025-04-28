
// Game state management
class GameState 
{
	constructor() 
	{
		this.currentNode = "start";
		this.inventory = [];
		this.journal = [];
		this.visitedNodes = ["start"];
		this.settings = {
		  fontSize: 100,
		  darkMode: false,
		  musicVolume: 70,
		  soundEffects: 80,
		  textSpeed: 3,
		  autoSave: true,
		  muteAll: false
		};
	}
  
  // Add item to inventory if not already present
  addToInventory(item) 
  {
		if (!this.inventory.includes(item)) 
		{
			this.inventory.push(item);
		}
  }
  
  // Add entry to journal
  addToJournal(entry) 
  {
		const timestamp = new Date().toLocaleString();
		this.journal.push({ entry, timestamp });
  }
  
  // Save game state to local storage
  saveGame() 
  {
		const saveData = {
		  currentNode: this.currentNode,
		  inventory: this.inventory,
		  journal: this.journal,
		  visitedNodes: this.visitedNodes,
		  settings: this.settings,
		  timestamp: new Date().toLocaleString()
		};
	
		localStorage.setItem('librariansSecretSave', JSON.stringify(saveData));
		return true;
  }
  
  // Load game state from local storage
  loadGame() 
  {
		const saveData = localStorage.getItem('librariansSecretSave');
		if (!saveData) 
		{
			return false;
		}
	
		const parsedData = JSON.parse(saveData);
		this.currentNode = parsedData.currentNode;
		this.inventory = parsedData.inventory;
		this.journal = parsedData.journal;
		this.visitedNodes = parsedData.visitedNodes;
		this.settings = parsedData.settings;
	
		return true;
  }
  
  // Check if item is in inventory
  hasItem(item) 
  {
		return this.inventory.includes(item);
  }
  
  // Move to a new story node
  goToNode(nodeId) 
  {
		if (storyData[nodeId]) 
		{
			this.currentNode = nodeId;
			if (!this.visitedNodes.includes(nodeId)) 
			{
				this.visitedNodes.push(nodeId);
			}
	  
			// Process node effects
			const node = storyData[nodeId];
	  
			// Add items to inventory if specified
			if (node.addToInventory) 
			{
				node.addToInventory.forEach(item => this.addToInventory(item));
			}
	  
			// Add entry to journal if specified
			if (node.addToJournal) 
			{
				this.addToJournal(node.addToJournal);
			}
	  
			// Auto-save if enabled
			if (this.settings.autoSave) 
			{
				this.saveGame();
			}
	  
			return true;
		}
		return false;
	}
  
	// Reset game to start
	resetGame() 
	{
		this.currentNode = "start";
		this.inventory = [];
		this.journal = [];
		this.visitedNodes = ["start"];
		// Keep settings as they are
		if (this.settings.autoSave) 
		{
			this.saveGame();
		}
	}
  
	// Update game settings
	updateSettings(newSettings) 
	{
		this.settings = { ...this.settings, ...newSettings };
		localStorage.setItem('librariansSecretSettings', JSON.stringify(this.settings));
	}
  
	// Load settings only
	loadSettings() 
	{
		const savedSettings = localStorage.getItem('librariansSecretSettings');
		if (savedSettings) 
		{
			this.settings = JSON.parse(savedSettings);
			return true;
		}
		return false;
	}
}


// Item definitions with descriptions
const itemDefinitions = {
	brass_key: {
		name: "Brass Key",
		description: "An ornate brass key with unusual symbols engraved on its bow. It feels unusually warm to the touch.",
		image: "brass-key.jpg"
	  },
	manuscript: {
		name: "Ancient Manuscript",
		description: "A treatise on ancient libraries with strange markings in the margins. Some pages appear to contain coded information.",
		image: "manuscript.jpg"
	  },
	loose_page: {
		name: "Mysterious Riddle",
		description: "A loose page containing a riddle about 'shadow meeting light' and 'Apollo's gaze'. The paper seems older than the manuscript it was found in.",
		image: "loose-page.jpg"
	  },
	flashlight: {
		name: "Heavy-Duty Flashlight",
		description: "A sturdy metal flashlight from the maintenance closet. It casts a strong beam that could cut through the darkest shadows.",
		image: "flashlight.jpg"
	  },
	codex_page: {
		name: "Page from the Codex",
		description: "A page that somehow detached itself from the glowing book. The symbols continue to shift subtly even when separated from the main text.",
		image: "codex-page.jpg"
	  }
};



// Game engine class to manage gameplay
class GameEngine 
{
	constructor() 
	{
		this.gameState = new GameState();
		this.initializeUI();
		this.setupEventListeners();
		this.loadGameOrStart();
	}
  
	// Set up UI elements and references
	initializeUI() 
	{
		this.storyTextElement = document.querySelector('.story-text');
		this.choicesContainer = document.querySelector('.choices-container');
		this.mainContent = document.querySelector('.story-content');
	
		// Initialise UI with loading state
		this.setLoadingState(true);
	}
  
	// Set up event listeners for UI interactions
	setupEventListeners() 
	{
		// Menu button
		document.getElementById('menuButton').addEventListener('click', () => {
			document.getElementById('sideMenu').style.left = '0';
			document.getElementById('overlay').style.display = 'block';
		});
	
		// Close menu button
		document.getElementById('closeMenu').addEventListener('click', () => {
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});
	
		// Settings button
		document.getElementById('settingsButton').addEventListener('click', () => {
			document.getElementById('settingsPanel').style.right = '0';
			document.getElementById('overlay').style.display = 'block';
			this.updateSettingsUI();
		});
	
		// Close settings button
		document.getElementById('closeSettings').addEventListener('click', () => {
			document.getElementById('settingsPanel').style.right = '-400px';
			document.getElementById('overlay').style.display = 'none';
		});
	
		// Overlay click to close menus
		document.getElementById('overlay').addEventListener('click', () => {
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('settingsPanel').style.right = '-400px';
			document.getElementById('overlay').style.display = 'none';
		});
	
		// Menu actions
		document.getElementById('newGame').addEventListener('click', (e) => {
			e.preventDefault();
			if (confirm('Start a new game? Any unsaved progress will be lost.')) 
			{
				this.gameState.resetGame();
				this.renderCurrentNode();
				document.getElementById('sideMenu').style.left = '-300px';
				document.getElementById('overlay').style.display = 'none';
			}
		});
	
		document.getElementById('loadGame').addEventListener('click', (e) => {
			e.preventDefault();
			if (this.gameState.loadGame()) 
			{
				this.renderCurrentNode();
				document.getElementById('sideMenu').style.left = '-300px';
				document.getElementById('overlay').style.display = 'none';
				alert('Game loaded successfully!');
			} 
			else 
			{
				alert('No saved game found.');
			}
		});
	
		document.getElementById('saveGame').addEventListener('click', (e) => {
			e.preventDefault();
			if (this.gameState.saveGame()) 
			{
				document.getElementById('sideMenu').style.left = '-300px';
				document.getElementById('overlay').style.display = 'none';
				alert('Game saved successfully!');
			} 
			else 
			{
				alert('Failed to save game.');
			}
		});
	
		// Inventory button
		document.getElementById('inventory').addEventListener('click', (e) => {
			e.preventDefault();
			this.showInventory();
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});
	
		// Journal button
		document.getElementById('journal').addEventListener('click', (e) => {
			e.preventDefault();
			this.showJournal();
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});
	
		// Apply settings
		document.getElementById('applySettings').addEventListener('click', () => {
			const newSettings = {
				fontSize: parseInt(document.getElementById('fontSize').value),
				darkMode: document.getElementById('darkMode').checked,
				musicVolume: parseInt(document.getElementById('musicVolume').value),
				soundEffects: parseInt(document.getElementById('soundEffects').value),
				muteAll: document.getElementById('muteAll').checked,
				textSpeed: parseInt(document.getElementById('textSpeed').value),
				autoSave: document.getElementById('autoSave').checked
			};
	  
			this.gameState.updateSettings(newSettings);
			this.applySettings();
	  
			document.getElementById('settingsPanel').style.right = '-400px';
			document.getElementById('overlay').style.display = 'none';
	  
			alert('Settings applied and saved!');
		});
	
		// Reset settings
		document.getElementById('resetSettings').addEventListener('click', () => {
			if (confirm('Reset all settings to default?')) 
			{
				this.gameState.settings = {
				fontSize: 100,
				darkMode: false,
				musicVolume: 70,
				soundEffects: 80,
				textSpeed: 3,
				autoSave: true,
				muteAll: false
			};
		
				this.updateSettingsUI();
				this.applySettings();
			
				localStorage.removeItem('librariansSecretSettings');
				alert('Settings reset to default!');
			}
		});
	}
  
  
	// Load saved game or start a new game
	loadGameOrStart() 
	{
		// First trying to load just settings
		this.gameState.loadSettings();
		this.applySettings();
	
		// Then trying to load a saved game
		if (!this.gameState.loadGame()) 
		{
			// No saved game, start a new one
			this.gameState.currentNode = "start";
		}
	
		// Render the current node
		this.renderCurrentNode();
		this.setLoadingState(false);
	}
  
	// Apply current settings to the UI
	applySettings() 
	{
		const settings = this.gameState.settings;
	
		// Font size
		document.documentElement.style.setProperty('--base-font-size', `${settings.fontSize}%`);
	
		// Dark mode
		if (settings.darkMode) 
		{
			document.body.classList.add('dark-mode');
		} 
		else 
		{
			document.body.classList.remove('dark-mode');
		}
	
		// Audio settings would be applied here if audio was implemented
	}
  
	// Update settings UI to match current settings
	updateSettingsUI()
	{
		const settings = this.gameState.settings;
		
		// Update sliders and toggles
		document.getElementById('fontSize').value = settings.fontSize;
		document.getElementById('fontSizeValue').textContent = `${settings.fontSize}%`;
		
		document.getElementById('darkMode').checked = settings.darkMode;
		
		document.getElementById('musicVolume').value = settings.musicVolume;
		document.getElementById('musicVolumeValue').textContent = `${settings.musicVolume}%`;
		
		document.getElementById('soundEffects').value = settings.soundEffects;
		document.getElementById('soundEffectsValue').textContent = `${settings.soundEffects}%`;
		
		document.getElementById('muteAll').checked = settings.muteAll;
		
		document.getElementById('textSpeed').value = settings.textSpeed;
		const speeds = ['Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast'];
		document.getElementById('textSpeedValue').textContent = speeds[settings.textSpeed - 1];
		
		document.getElementById('autoSave').checked = settings.autoSave;
	}
  
	// Show/hide loading state
	setLoadingState(isLoading) 
	{
		if (isLoading) 
		{
			this.storyTextElement.innerHTML = '<p>Loading your adventure...</p>';
			this.choicesContainer.innerHTML = '';
		}
	}
  
	// Render the current story node
	renderCurrentNode() 
	{
		const currentNode = storyData[this.gameState.currentNode];
		if (!currentNode) 
		{
			console.error(`Node ${this.gameState.currentNode} not found!`);
			return;
		}
	
		// Update story text with fade effect
		this.storyTextElement.style.opacity = '0';
	
		setTimeout(() => {
			// Set story text
			this.storyTextElement.innerHTML = currentNode.text;
		  
			// Set background if available
			if (currentNode.background) 
			{
				// using images
				this.mainContent.style.backgroundImage = `url('images/${currentNode.background}')`;
			}
		  
			// Fade in the text
			this.storyTextElement.style.transition = 'opacity 1.5s ease';
			this.storyTextElement.style.opacity = '1';
		  
			// Create choices
			this.renderChoices(currentNode.choices);
		}, 300);
	}
  
	// Render the choice buttons
	renderChoices(choices) 
	{
		this.choicesContainer.innerHTML = '';
	
		if (!choices || choices.length === 0) 
		{
			// If no choices, create a continue button that reloads the game
			const continueBtn = document.createElement('button');
			continueBtn.className = 'choice-btn';
			continueBtn.textContent = 'Start a New Adventure';
			continueBtn.addEventListener('click', () => {
				this.gameState.resetGame();
				this.renderCurrentNode();
			});
	  
			this.choicesContainer.appendChild(continueBtn);
			return;
		}
	
		// Create a button for each choice
		choices.forEach(choice => {
			const choiceBtn = document.createElement('button');
			choiceBtn.className = 'choice-btn';
			choiceBtn.textContent = choice.text;
	  
			choiceBtn.addEventListener('click', () => {
				// Visual feedback for button click
				choiceBtn.style.backgroundColor = '#462f27';
				choiceBtn.style.transform = 'scale(0.98)';
  
				// Navigate to the next node after a short delay
				setTimeout(() => {
					this.gameState.goToNode(choice.next);
					this.renderCurrentNode();
				}, 300);
			});

			this.choicesContainer.appendChild(choiceBtn);
		});
	}


	// Show inventory overlay
	showInventory() 
	{
		// Create overlay container
		const inventoryOverlay = document.createElement('div');
		inventoryOverlay.className = 'modal-overlay';
		inventoryOverlay.style.position = 'fixed';
		inventoryOverlay.style.top = '0';
		inventoryOverlay.style.left = '0';
		inventoryOverlay.style.width = '100%';
		inventoryOverlay.style.height = '100%';
		inventoryOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
		inventoryOverlay.style.zIndex = '2000';
		inventoryOverlay.style.display = 'flex';
		inventoryOverlay.style.justifyContent = 'center';
		inventoryOverlay.style.alignItems = 'center';
	  
		// Create inventory container
		const inventoryContainer = document.createElement('div');
		inventoryContainer.className = 'inventory-container';
		inventoryContainer.style.width = '80%';
		inventoryContainer.style.maxWidth = '800px';
		inventoryContainer.style.maxHeight = '80vh';
		inventoryContainer.style.backgroundColor = '#34231f';
		inventoryContainer.style.border = '3px solid #83624a';
		inventoryContainer.style.borderRadius = '8px';
		inventoryContainer.style.padding = '2rem';
		inventoryContainer.style.color = '#e8d9c0';
		inventoryContainer.style.overflowY = 'auto';
	  
		// Header
		const header = document.createElement('div');
		header.style.display = 'flex';
		header.style.justifyContent = 'space-between';
		header.style.alignItems = 'center';
		header.style.marginBottom = '1.5rem';
		header.style.borderBottom = '2px solid #83624a';
		header.style.paddingBottom = '1rem';
	  
		const title = document.createElement('h2');
		title.textContent = 'Inventory';
		title.style.margin = '0';
	  
		const closeButton = document.createElement('button');
		closeButton.textContent = '✕';
		closeButton.style.background = 'none';
		closeButton.style.border = 'none';
		closeButton.style.color = '#e8d9c0';
		closeButton.style.fontSize = '1.5rem';
		closeButton.style.cursor = 'pointer';
		closeButton.addEventListener('click', () => {
			document.body.removeChild(inventoryOverlay);
		});
	  
		header.appendChild(title);
		header.appendChild(closeButton);
		inventoryContainer.appendChild(header);
  
		// Inventory items
		const itemsContainer = document.createElement('div');
		itemsContainer.style.display = 'grid';
		itemsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
		itemsContainer.style.gap = '1rem';
  
		if (this.gameState.inventory.length === 0) 
		{
			const emptyMsg = document.createElement('p');
			emptyMsg.textContent = 'Your inventory is empty.';
			emptyMsg.style.gridColumn = '1 / -1';
			emptyMsg.style.textAlign = 'center';
			emptyMsg.style.padding = '2rem';
			emptyMsg.style.fontStyle = 'italic';
			itemsContainer.appendChild(emptyMsg);
		} 
		else 
		{
			this.gameState.inventory.forEach(itemId => {
				const itemDef = itemDefinitions[itemId];
				if (!itemDef) return;
	  
				const itemCard = document.createElement('div');
				itemCard.className = 'inventory-item';
				itemCard.style.backgroundColor = 'rgba(131, 98, 74, 0.3)';
				itemCard.style.border = '1px solid #83624a';
				itemCard.style.borderRadius = '5px';
				itemCard.style.padding = '1rem';
				itemCard.style.cursor = 'pointer';
	  
				const itemName = document.createElement('h3');
				itemName.textContent = itemDef.name;
				itemName.style.margin = '0 0 0.5rem 0';
	  
				const itemDesc = document.createElement('p');
				itemDesc.textContent = itemDef.description;
				itemDesc.style.fontSize = '0.9rem';
				itemDesc.style.margin = '0';
	  
				itemCard.appendChild(itemName);
				itemCard.appendChild(itemDesc);
	  
				// Add a placeholder for image
				const itemImage = document.createElement('div');
				itemImage.style.height = '100px';
				itemImage.style.backgroundColor = '#614535';
				itemImage.style.marginBottom = '0.5rem';
				itemImage.style.borderRadius = '3px';
				itemImage.style.display = 'flex';
				itemImage.style.justifyContent = 'center';
				itemImage.style.alignItems = 'center';
				itemImage.style.color = '#e8d9c0';
				itemImage.textContent = `[${itemDef.name} Image]`;
				itemCard.insertBefore(itemImage, itemName);
	  
				itemsContainer.appendChild(itemCard);
			});
		}
  
		inventoryContainer.appendChild(itemsContainer);
		inventoryOverlay.appendChild(inventoryContainer);
		document.body.appendChild(inventoryOverlay);
	}

	// Show journal overlay
	showJournal() 
	{
		// Create overlay container
		const journalOverlay = document.createElement('div');
		journalOverlay.className = 'modal-overlay';
		journalOverlay.style.position = 'fixed';
		journalOverlay.style.top = '0';
		journalOverlay.style.left = '0';
		journalOverlay.style.width = '100%';
		journalOverlay.style.height = '100%';
		journalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
		journalOverlay.style.zIndex = '2000';
		journalOverlay.style.display = 'flex';
		journalOverlay.style.justifyContent = 'center';
		journalOverlay.style.alignItems = 'center';
  
		// Create journal container
		const journalContainer = document.createElement('div');
		journalContainer.className = 'journal-container';
		journalContainer.style.width = '80%';
		journalContainer.style.maxWidth = '800px';
		journalContainer.style.maxHeight = '80vh';
		journalContainer.style.backgroundColor = '#34231f';
		journalContainer.style.border = '3px solid #83624a';
		journalContainer.style.borderRadius = '8px';
		journalContainer.style.padding = '2rem';
		journalContainer.style.color = '#e8d9c0';
		journalContainer.style.overflowY = 'auto';
  
		// Header
		const header = document.createElement('div');
		header.style.display = 'flex';
		header.style.justifyContent = 'space-between';
		header.style.alignItems = 'center';
		header.style.marginBottom = '1.5rem';
		header.style.borderBottom = '2px solid #83624a';
		header.style.paddingBottom = '1rem';
  
		const title = document.createElement('h2');
		title.textContent = 'Journal';
		title.style.margin = '0';
  
		const closeButton = document.createElement('button');
		closeButton.textContent = '✕';
		closeButton.style.background = 'none';
		closeButton.style.border = 'none';
		closeButton.style.color = '#e8d9c0';
		closeButton.style.fontSize = '1.5rem';
		closeButton.style.cursor = 'pointer';
		closeButton.addEventListener('click', () => {
			document.body.removeChild(journalOverlay);
		});
  
		header.appendChild(title);
		header.appendChild(closeButton);
		journalContainer.appendChild(header);
  
		// Journal entries
		const entriesContainer = document.createElement('div');
		entriesContainer.style.display = 'flex';
		entriesContainer.style.flexDirection = 'column';
		entriesContainer.style.gap = '1rem';
  
		if (this.gameState.journal.length === 0) 
		{
			const emptyMsg = document.createElement('p');
			emptyMsg.textContent = 'Your journal is empty.';
			emptyMsg.style.textAlign = 'center';
			emptyMsg.style.padding = '2rem';
			emptyMsg.style.fontStyle = 'italic';
			entriesContainer.appendChild(emptyMsg);
		} 
		else 
		{
			// Display entries in reverse chronological order
			[...this.gameState.journal].reverse().forEach(journalEntry => {
				const entryCard = document.createElement('div');
				entryCard.className = 'journal-entry';
				entryCard.style.backgroundColor = 'rgba(131, 98, 74, 0.3)';
				entryCard.style.border = '1px solid #83624a';
				entryCard.style.borderRadius = '5px';
				entryCard.style.padding = '1rem';
			  
				const entryTimestamp = document.createElement('div');
				entryTimestamp.textContent = journalEntry.timestamp;
				entryTimestamp.style.fontSize = '0.8rem';
				entryTimestamp.style.color = '#a88c7d';
				entryTimestamp.style.marginBottom = '0.5rem';
			  
				const entryText = document.createElement('p');
				entryText.textContent = journalEntry.entry;
				entryText.style.margin = '0';
				entryText.style.lineHeight = '1.6';
			  
				entryCard.appendChild(entryTimestamp);
				entryCard.appendChild(entryText);
				entriesContainer.appendChild(entryCard);
			});
		}
  
		journalContainer.appendChild(entriesContainer);
		journalOverlay.appendChild(journalContainer);
		document.body.appendChild(journalOverlay);
	}


	// Display About overlay
	showAbout() 
	{
		// Create overlay container
		const aboutOverlay = document.createElement('div');
		aboutOverlay.className = 'modal-overlay';
		aboutOverlay.style.position = 'fixed';
		aboutOverlay.style.top = '0';
		aboutOverlay.style.left = '0';
		aboutOverlay.style.width = '100%';
		aboutOverlay.style.height = '100%';
		aboutOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
		aboutOverlay.style.zIndex = '2000';
		aboutOverlay.style.display = 'flex';
		aboutOverlay.style.justifyContent = 'center';
		aboutOverlay.style.alignItems = 'center';
  
		// Create about container
		const aboutContainer = document.createElement('div');
		aboutContainer.className = 'about-container';
		aboutContainer.style.width = '80%';
		aboutContainer.style.maxWidth = '700px';
		aboutContainer.style.backgroundColor = '#34231f';
		aboutContainer.style.border = '3px solid #83624a';
		aboutContainer.style.borderRadius = '8px';
		aboutContainer.style.padding = '2rem';
		aboutContainer.style.color = '#e8d9c0';
  
		// Header
		const header = document.createElement('div');
		header.style.display = 'flex';
		header.style.justifyContent = 'space-between';
		header.style.alignItems = 'center';
		header.style.marginBottom = '1.5rem';
		header.style.borderBottom = '2px solid #83624a';
		header.style.paddingBottom = '1rem';
  
		const title = document.createElement('h2');
		title.textContent = 'About The Librarian\'s Secret';
		title.style.margin = '0';
  
		const closeButton = document.createElement('button');
		closeButton.textContent = '✕';
		closeButton.style.background = 'none';
		closeButton.style.border = 'none';
		closeButton.style.color = '#e8d9c0';
		closeButton.style.fontSize = '1.5rem';
		closeButton.style.cursor = 'pointer';
		closeButton.addEventListener('click', () => {
			document.body.removeChild(aboutOverlay);
		});
  
		header.appendChild(title);
		header.appendChild(closeButton);
		aboutContainer.appendChild(header);
  
		// About content
		const aboutContent = document.createElement('div');
		aboutContent.innerHTML = `
			<p>"The Librarian's Secret" is an interactive fiction adventure where your choices shape the story.</p>
			<p>Explore the mysteries of Ravencrest Library, uncover hidden worlds, and decide your destiny as the story unfolds.</p>
			<h3>Features:</h3>
			<ul>
			  <li>Multiple branching storylines leading to different endings</li>
			  <li>Inventory system to collect and use important items</li>
			  <li>Journal that records your discoveries and adventures</li>
			  <li>Save and load functionality to continue your journey</li>
			</ul>
			<p>Created by John Adeyemi using Web technologies (HTML, CSS, JavaScript)</p>
			<p>Version 1.0</p>
		`;
		aboutContent.style.lineHeight = '1.6';
  
		aboutContainer.appendChild(aboutContent);
		aboutOverlay.appendChild(aboutContainer);
		document.body.appendChild(aboutOverlay);
	}

	// Display Help overlay
	showHelp() 
	{
		// Create overlay container
		const helpOverlay = document.createElement('div');
		helpOverlay.className = 'modal-overlay';
		helpOverlay.style.position = 'fixed';
		helpOverlay.style.top = '0';
		helpOverlay.style.left = '0';
		helpOverlay.style.width = '100%';
		helpOverlay.style.height = '100%';
		helpOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
		helpOverlay.style.zIndex = '2000';
		helpOverlay.style.display = 'flex';
		helpOverlay.style.justifyContent = 'center';
		helpOverlay.style.alignItems = 'center';
  
		// Create help container
		const helpContainer = document.createElement('div');
		helpContainer.className = 'help-container';
		helpContainer.style.width = '80%';
		helpContainer.style.maxWidth = '700px';
		helpContainer.style.backgroundColor = '#34231f';
		helpContainer.style.border = '3px solid #83624a';
		helpContainer.style.borderRadius = '8px';
		helpContainer.style.padding = '2rem';
		helpContainer.style.color = '#e8d9c0';
		helpContainer.style.maxHeight = '80vh';
		helpContainer.style.overflowY = 'auto';
  
		// Header
		const header = document.createElement('div');
		header.style.display = 'flex';
		header.style.justifyContent = 'space-between';
		header.style.alignItems = 'center';
		header.style.marginBottom = '1.5rem';
		header.style.borderBottom = '2px solid #83624a';
		header.style.paddingBottom = '1rem';
  
		const title = document.createElement('h2');
		title.textContent = 'Help & Instructions';
		title.style.margin = '0';
  
		const closeButton = document.createElement('button');
		closeButton.textContent = '✕';
		closeButton.style.background = 'none';
		closeButton.style.border = 'none';
		closeButton.style.color = '#e8d9c0';
		closeButton.style.fontSize = '1.5rem';
		closeButton.style.cursor = 'pointer';
		closeButton.addEventListener('click', () => {
			document.body.removeChild(helpOverlay);
		});
  
		header.appendChild(title);
		header.appendChild(closeButton);
		helpContainer.appendChild(header);
  
		// Help content
		const helpContent = document.createElement('div');
		helpContent.innerHTML = `
			<h3>How to Play</h3>
			<p>The Librarian's Secret is a choice-based interactive story. Read the story text and select one of the available choices to proceed.</p>
			
			<h3>Navigation</h3>
			<ul>
				<li><strong>Menu (☰):</strong> Access game options like save, load, and settings</li>
				<li><strong>Settings (⚙):</strong> Adjust game appearance and audio</li>
			</ul>
			
			<h3>Game Features</h3>
			<ul>
				<li><strong>Inventory:</strong> View items you've collected during your journey</li>
				<li><strong>Journal:</strong> Review notes and important discoveries</li>
				<li><strong>Save/Load:</strong> Save your progress or load a previous game</li>
				<li><strong>Settings:</strong> Adjust font size, toggle dark mode, and more</li>
			</ul>
			
			<h3>Tips for Playing</h3>
			<ul>
				<li>Pay careful attention to the story text—it often contains clues</li>
				<li>Your choices matter and can lead to different story paths and endings</li>
				<li>Check your journal regularly for important information</li>
				<li>Items in your inventory may become useful later in the story</li>
				<li>Save your game frequently, especially before making important choices</li>
			</ul>
		`;
		helpContent.style.lineHeight = '1.6';
  
		helpContainer.appendChild(helpContent);
		helpOverlay.appendChild(helpContainer);
		document.body.appendChild(helpOverlay);
	}


	// Display the map overlay
	showMap() 
	{
		// Create overlay container
		const mapOverlay = document.createElement('div');
		mapOverlay.className = 'modal-overlay';
		mapOverlay.style.position = 'fixed';
		mapOverlay.style.top = '0';
		mapOverlay.style.left = '0';
		mapOverlay.style.width = '100%';
		mapOverlay.style.height = '100%';
		mapOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
		mapOverlay.style.zIndex = '2000';
		mapOverlay.style.display = 'flex';
		mapOverlay.style.justifyContent = 'center';
		mapOverlay.style.alignItems = 'center';
  
		// Create map container
		const mapContainer = document.createElement('div');
		mapContainer.className = 'map-container';
		mapContainer.style.width = '90%';
		mapContainer.style.maxWidth = '800px';
		mapContainer.style.backgroundColor = '#34231f';
		mapContainer.style.border = '3px solid #83624a';
		mapContainer.style.borderRadius = '8px';
		mapContainer.style.padding = '2rem';
		mapContainer.style.color = '#e8d9c0';
  
		// Header
		const header = document.createElement('div');
		header.style.display = 'flex';
		header.style.justifyContent = 'space-between';
		header.style.alignItems = 'center';
		header.style.marginBottom = '1.5rem';
		header.style.borderBottom = '2px solid #83624a';
		header.style.paddingBottom = '1rem';
  
		const title = document.createElement('h2');
		title.textContent = 'Library Map';
		title.style.margin = '0';
  
		const closeButton = document.createElement('button');
		closeButton.textContent = '✕';
		closeButton.style.background = 'none';
		closeButton.style.border = 'none';
		closeButton.style.color = '#e8d9c0';
		closeButton.style.fontSize = '1.5rem';
		closeButton.style.cursor = 'pointer';
		closeButton.addEventListener('click', () => {
			document.body.removeChild(mapOverlay);
		});
  
		header.appendChild(title);
		header.appendChild(closeButton);
		mapContainer.appendChild(header);
  
		// Map placeholder
		const mapContent = document.createElement('div');
		mapContent.style.height = '400px';
		mapContent.style.backgroundColor = '#614535';
		mapContent.style.borderRadius = '5px';
		mapContent.style.display = 'flex';
		mapContent.style.justifyContent = 'center';
		mapContent.style.alignItems = 'center';
		mapContent.style.color = '#e8d9c0';
		mapContent.style.fontSize = '1.2rem';
		mapContent.textContent = 'Map will be revealed as you explore...';
  
		// Generate a simple map based on visited nodes
		if (this.gameState.visitedNodes.length > 1) 
		{
			mapContent.textContent = '';
			mapContent.style.padding = '1rem';
			mapContent.style.fontFamily = 'monospace';
			mapContent.style.fontSize = '14px';
			mapContent.style.backgroundColor = '#614535';
			mapContent.style.color = '#e8d9c0';
			mapContent.style.whiteSpace = 'pre';
			mapContent.style.overflow = 'auto';

			// Create a simple ASCII map
			let mapText = '  RAVENCREST LIBRARY MAP\n';
			mapText += '  (Discovered Locations)\n';
			mapText += '  =====================\n\n';

			// Map legend based on visited nodes
			const visitedNodes = this.gameState.visitedNodes;
			const locationNames = {
				'start': 'Main Entrance Hall',
				'restricted_section': 'Restricted Section',
				'hidden_archive': 'Hidden Archive',
				'manuscript_clues': 'Study Area',
				'senior_librarian': 'Senior Librarian\'s Office',
				'wait_morning': 'Night Shift Desk',
				'get_flashlight': 'Maintenance Closet',
				'read_ancient_book': 'Ancient Codex Chamber',
				'main_hall_stars': 'Main Hall Floor Pattern',
				'decode_riddle': 'Quiet Reading Corner',
				'follow_librarian': 'Ms. Blackwood\'s Path',
				'follow_blackwood_secretly': 'Secret Passage',
				'close_door': 'Closed Door'
			};

			// Simple ASCII connections
			if (visitedNodes.includes('start')) 
			{
				mapText += '  [Main Entrance Hall]\n';
				mapText += '          |        \\\n';

				if (visitedNodes.includes('restricted_section')) 
				{
					mapText += '          |         \\             \n';
					mapText += '          |          [Restricted Section]\n';

					if (visitedNodes.includes('hidden_archive')) 
					{
						mapText += '          |                    |\n';
						mapText += '          |                    |\n';
						mapText += '          |            [Hidden Archive]\n';

						if (visitedNodes.includes('read_ancient_book')) 
						{
							mapText += '          |                    |\n';
							mapText += '          |                    |\n';
							mapText += '          |            [Ancient Codex Chamber]\n';
						}
					}
				}

				if (visitedNodes.includes('manuscript_clues')) 
				{
					mapText += '          |\n';
					mapText += '  [Study Area]\n';

					if (visitedNodes.includes('main_hall_stars')) 
					{
						mapText += '      |      \\\n';
						mapText += '      |       [Main Hall Floor Pattern]\n';
					}

					if (visitedNodes.includes('decode_riddle')) 
					{
						mapText += '      |\n';
						mapText += '  [Quiet Reading Corner]\n';
					}
				}

				if (visitedNodes.includes('senior_librarian')) 
				{
					mapText += '         /\n';
					mapText += '        /\n';
					mapText += '  [Senior Librarian\'s Office]\n';

					if (visitedNodes.includes('follow_librarian')) 
					{
						mapText += '        |\n';
						mapText += '        |\n';
						mapText += '  [Ms. Blackwood\'s Path]\n';
					}
				}

				if (visitedNodes.includes('wait_morning')) 
				{
					mapText += '        \\\n';
					mapText += '         \\\n';
					mapText += '    [Night Shift Desk]\n';
				}

				if (visitedNodes.includes('get_flashlight')) 
				{
					mapText += '          \\\n';
					mapText += '           \\\n';
					mapText += '      [Maintenance Closet]\n';

					if (visitedNodes.includes('follow_blackwood_secretly')) 
					{
						mapText += '             |\n';
						mapText += '             |\n';
						mapText += '      [Secret Passage]\n';
					}
				}
			}

			mapContent.textContent = mapText;
		}

		mapContainer.appendChild(mapContent);

		// Map legend
		const mapLegend = document.createElement('div');
		mapLegend.style.marginTop = '1rem';
		mapLegend.style.fontSize = '0.9rem';
		mapLegend.innerHTML = '<p><em>Note: The map expands as you explore more locations.</em></p>';

		mapContainer.appendChild(mapLegend);
		mapOverlay.appendChild(mapContainer);
		document.body.appendChild(mapOverlay);
	}

	// Initialise the game
	initializeGame() 
	{
		// Add event listeners for remaining menu items
		document.getElementById('about').addEventListener('click', (e) => {
			e.preventDefault();
			this.showAbout();
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});

		document.getElementById('help').addEventListener('click', (e) => {
			e.preventDefault();
			this.showHelp();
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});

		document.getElementById('viewMap').addEventListener('click', (e) => {
			e.preventDefault();
			this.showMap();
			document.getElementById('sideMenu').style.left = '-300px';
			document.getElementById('overlay').style.display = 'none';
		});

		// Initialise settings sliders
		const fontSizeSlider = document.getElementById('fontSize');
		const fontSizeValue = document.getElementById('fontSizeValue');

		fontSizeSlider.addEventListener('input', function() {
			fontSizeValue.textContent = this.value + '%';
		});

		const musicVolumeSlider = document.getElementById('musicVolume');
		const musicVolumeValue = document.getElementById('musicVolumeValue');

		musicVolumeSlider.addEventListener('input', function() {
			musicVolumeValue.textContent = this.value + '%';
		});

		const soundEffectsSlider = document.getElementById('soundEffects');
		const soundEffectsValue = document.getElementById('soundEffectsValue');

		soundEffectsSlider.addEventListener('input', function() {
			soundEffectsValue.textContent = this.value + '%';
		});

		const textSpeedSlider = document.getElementById('textSpeed');
		const textSpeedValue = document.getElementById('textSpeedValue');

		textSpeedSlider.addEventListener('input', function() {
			const speeds = ['Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast'];
			textSpeedValue.textContent = speeds[this.value - 1];
		});
	}
	
	
}
