// Story data structure - contains all story nodes, choices, and game logic
const storyData = {
	// Starting point of the game
	"start": {
		text: `<p>Welcome to Ravencrest Library, a place where books are merely the beginning of the mystery...</p>
			<p>As a literature graduate now working the night shift, you couldn't have imagined the strange occurrences that await in these ancient halls. The flickering lights, the whispers between the shelves, and that peculiar locked door in the restricted section that no one seems to have a key for.</p>
			<p>Tonight is different. The library feels alive with secrets, and you've found something unusual - a small brass key hidden within the pages of an old manuscript. Perhaps it's nothing, but your curiosity compels you to investigate.</p>
			<p>The choices you make tonight will unravel a mystery centuries in the making. Will you discover the librarian's secret, or become part of it?</p>
			<p>Your journey begins now. Choose your path wisely.</p>`,
		background: "library-main-hall.jpg",
		choices: [
		  { id: "investigate_door", text: "[1] Investigate the locked door in the restricted section", next: "restricted_section" },
		  { id: "examine_manuscript", text: "[2] Search the manuscript for more clues", next: "manuscript_clues" },
		  { id: "ask_librarian", text: "[3] Ask the senior librarian about the key", next: "senior_librarian" },
		  { id: "wait_until_morning", text: "[4] Wait until morning and return the key", next: "wait_morning" }
		]
	},
	
  
	// Path 1: Investigate the door
	"restricted_section": {
		text: `<p>The restricted section is eerily quiet as you approach. Your footsteps echo against the marble floor despite your attempts to move silently.</p>
			<p>The door stands before you—ancient oak with intricate carvings that seem to shift when viewed from different angles. A strange energy emanates from it, almost palpable in the dim light.</p>
			<p>The brass key feels warm in your palm as you raise it to the keyhole. It slides in with surprising ease, as if it belongs there.</p>
			<p>A soft click breaks the silence as you turn the key. The door swings open, revealing a hidden staircase spiraling downward into darkness.</p>
			<p>The air that escapes is cool and smells of ancient paper and something else—something older.</p>`,
		background: "restricted-section.jpg",
		choices: [
		  { id: "descend_stairs", text: "[1.1] Descend the staircase", next: "hidden_archive" },
		  { id: "get_flashlight", text: "[1.2] Go get a flashlight first", next: "get_flashlight" },
		  { id: "leave_door", text: "[1.3] Close the door and leave", next: "close_door" }
		],
		addToInventory: ["brass_key"],
		addToJournal: "I've found where the brass key fits—a hidden door in the restricted section. It opened to reveal a staircase descending into darkness. What secrets could be hidden below the library?"
	},
  
  
	// Path 2: Search the manuscript
	"manuscript_clues": {
		text: `<p>You return to your desk and carefully examine the manuscript in which you found the key. It appears to be a treatise on ancient libraries, written in an old but legible script.</p>
			<p>As you turn the pages, you notice something peculiar—faint markings in the margins that form a pattern. Some look like stars or astronomical symbols. Others resemble fragments of a map.</p>
			<p>On page 42, there's a detailed sketch of what appears to be Ravencrest Library's main hall, but with differences. A section of the floor is marked with an X, and there's a notation in tiny script: "Beneath the seventh star lies the path to wisdom's heart."</p>
			<p>You recall the decorative stars embedded in the main hall's floor mosaic. Could this be referring to them?</p>
			<p>There's also a loose page tucked into the binding—it contains what looks like a riddle or poem:</p>
			<p><em>"Where shadow meets light at the turning of day,<br>
			Seek the sentinel that never sleeps nor strays.<br>
			Count seven steps from Apollo's gaze,<br>
			To find the door to forgotten ways."</em></p>`,
		background: "examining-manuscript.jpg",
		choices: [
		  { id: "check_floor", text: "[2.1] Investigate the star pattern on the main hall floor", next: "main_hall_stars" },
		  { id: "decode_riddle", text: "[2.2] Try to decode the riddle", next: "decode_riddle" },
		  { id: "research_symbols", text: "[2.3] Research the astronomical symbols", next: "research_symbols" }
		],
		addToInventory: ["manuscript", "loose_page"],
		addToJournal: "The manuscript contained more than just the key—there are strange markings throughout the margins, including what looks like a map. There's a reference to 'the seventh star' on the library floor and a mysterious riddle about a path that can be found at 'the turning of day.' I need to investigate further."
	},
  
  
	// Path 3: Ask the senior librarian
	"senior_librarian": {
		text: `<p>You decide to take the direct approach and seek out Ms. Eleanor Blackwood, the senior librarian who's worked at Ravencrest for over forty years.</p>
			<p>You find her in her office, surrounded by stacks of ancient texts and cataloging materials. The room smells of old leather, ink, and the faint scent of lavender that always accompanies her.</p>
			<p>When you show her the key, her expression changes subtly—surprise, followed by what might be concern, quickly masked by professional interest.</p>
			<p>"Where exactly did you find this?" she asks, taking the key and examining it closely.</p>
			<p>After you explain, she is quiet for a long moment, then looks at you with unexpected intensity.</p>
			<p>"There are many secrets in this library," she says carefully. "Some are meant to be discovered, and others..." she pauses, "others are kept hidden for good reason. This key is very old—it belongs to a collection we thought was lost."</p>
			<p>She hesitates, then seems to make a decision. "I believe you found this for a reason. The library sometimes...chooses people. If you're truly curious, there's something I should show you."</p>`,
		background: "senior-librarian-office.jpg",
		choices: [
		  { id: "follow_librarian", text: "[3.1] Follow Ms. Blackwood", next: "follow_librarian" },
		  { id: "ask_more_questions", text: "[3.2] Ask more questions before deciding", next: "question_librarian" },
		  { id: "decline_librarian", text: "[3.3] Politely decline and leave", next: "decline_librarian" }
		],
		addToJournal: "I showed the brass key to Ms. Blackwood, the senior librarian. Her reaction was strange—she seemed concerned but also intrigued. She mentioned that the library 'chooses people' and offered to show me something. There's clearly more to this library than meets the eye, and Ms. Blackwood seems to know its secrets."
	},
  
  
	// Path 4: Wait until morning
	"wait_morning": {
		text: `<p>You decide that mysterious keys and strange manuscripts are best dealt with in daylight. You carefully place the key back inside the manuscript and lock it in your desk drawer before finishing your shift.</p>
			<p>As the night progresses, however, you notice odd occurrences throughout the library. Books seemingly rearrange themselves when you're not looking. The temperature fluctuates inexplicably in certain areas. At one point, you distinctly hear your name whispered from an empty reading room.</p>
			<p>By the time morning arrives, you're on edge. As you prepare to leave, Ms. Blackwood, the senior librarian, arrives unusually early.</p>
			<p>"You found something last night, didn't you?" she asks without preamble.</p>
			<p>Startled by her directness, you admit to finding the key.</p>
			<p>She nods as if confirming a suspicion. "I felt the change in the library. It's been waiting for someone like you—someone who can sense its secrets. If you're willing, come with me now. There's something you need to see while the threshold is still open."</p>`,
		background: "library-morning.jpg",
		choices: [
		  { id: "go_with_blackwood", text: "[4.1/3.1] Go with Ms. Blackwood", next: "follow_librarian" },
		  { id: "show_the_key", text: "[4.2] Show her the key but delay going with her", next: "show_key_morning" },
		  { id: "deny_everything", text: "[4.3] Deny finding anything unusual", next: "deny_key_finding" }
		],
		addToJournal: "I tried to wait until morning, but strange things happened throughout the night—whispering voices, moving books, and temperature changes. Ms. Blackwood arrived early and somehow knew I'd found something. She mentioned a 'threshold' being open and wanted to show me something immediately."
	},
	
  
  
	// Path 1.1: Descend the stairs
	"hidden_archive": {
		text: `<p>Curiosity overpowers caution as you begin your descent. The staircase winds downward in a tight spiral, each step worn smooth by centuries of use.</p>
			<p>The darkness grows thicker as you descend, until you can barely see your hand in front of your face. Just as you consider turning back, you notice a faint blue glow emanating from below.</p>
			<p>The staircase opens into a vast chamber—an archive unlike anything you've seen before. Bookshelves stretch in all directions, filled with ancient tomes and scrolls. Many appear to predate the printing press.</p>
			<p>In the center of the room stands a pedestal supporting a book that emanates the strange blue light. The book lies open, its pages moving slightly as if stirred by an unfelt breeze.</p>
			<p>As you approach, you notice symbols on the pages that seem to rearrange themselves before your eyes.</p>`,
		background: "hidden-archive.jpg",
		choices: [
			{ id: "read_book", text: "[1.1.1] Try to read the glowing book", next: "read_ancient_book" },
			{ id: "explore_archive", text: "[1.1.2] Explore the archive further", next: "explore_archive" },
			{ id: "return_upstairs", text: "[1.1.3] Return upstairs", next: "return_from_archive" }
		],
		addToJournal: "I've discovered an incredible hidden archive beneath the library. At its center is a book that glows with an unearthly blue light. The symbols on its pages seem to move and rearrange themselves. What kind of book could this be?"
	},
	
	
	// Path 1.2: Get flashlight
	"get_flashlight": {
		text: `<p>Deciding it would be unwise to descend into darkness unprepared, you carefully close the door (leaving the key in the lock) and head to the maintenance closet where emergency supplies are kept.</p>
			<p>The library feels different now—more alive somehow, as if aware of your discovery. Shadows seem to follow your movements, and you could swear you hear faint whispers coming from between the bookshelves.</p>
			<p>In the supply closet, you find a heavy-duty flashlight and check that it works. As the beam cuts through the darkness, you notice something unusual on the back wall of the closet—a small symbol etched into the wood that matches one you saw on the manuscript.</p>
			<p>As you lean closer to examine it, you hear footsteps approaching. Through the crack in the door, you see Ms. Blackwood, the senior librarian, walking purposefully toward the restricted section. She shouldn't be here this late.</p>
			<p>Curiosity piqued, you have a decision to make.</p>`,
		background: "maintenance-closet.jpg",
		choices: [
		  { id: "follow_blackwood", text: "[1.2.1] Follow Ms. Blackwood quietly", next: "follow_blackwood_secretly" },
		  { id: "return_to_door", text: "[1.2.2] Return to the hidden door with your flashlight", next: "return_door_with_light" },
		  { id: "confront_blackwood", text: "[1.2.3] Reveal yourself and ask what she's doing", next: "confront_blackwood" }
		],
		addToInventory: ["flashlight"],
		addToJournal: "I decided to get a flashlight before exploring the staircase behind the hidden door. In the maintenance closet, I found a strange symbol matching one from the manuscript. Then I saw Ms. Blackwood heading toward the restricted section at this unusual hour. What could she be up to?"
	},
	
	
	// Path 1.3: Close Door
	"close_door": {
		text: `<p>You hesitate at the threshold of discovery. Something about the darkness beyond feels too ominous, too unknown. With reluctance, you close the ancient door and remove the key, the click of the lock echoing in the silence.</p>
			<p>As you step away, a strange sense of disappointment washes over you—not just your own, but as if the library itself is disappointed in your choice.</p>
			<p>You decide to return to your regular duties, but the night feels different now. The shadows seem deeper, the silence more pointed. Books appear to shift slightly on the shelves when you're not looking directly at them.</p>
			<p>Near midnight, you notice Ms. Blackwood, the senior librarian, entering the building. Unusual, as she rarely works this late. She moves purposefully toward the restricted section, unaware of your presence.</p>
			<p>Her expression is one of concern, and you hear her mutter, "It's awakening. Someone must have found the key."</p>`,
		background: "library-shadows.jpg",
		choices: [
		  { id: "follow_ms_blackwood", text: "[1.3.1] Follow Ms. Blackwood to the restricted section", next: "follow_blackwood_secretly" },
		  { id: "approach_ms_blackwood", text: "[1.3.2] Approach Ms. Blackwood and show her the key", next: "approach_with_key" },
		  { id: "hide_key", text: "[1.3.3] Hide the key and pretend nothing happened", next: "hide_key_continue" }
		],
		addToInventory: ["brass_key"],
		addToJournal: "I found the door but chose not to enter. Something felt wrong about it. Later, I saw Ms. Blackwood coming in at midnight, heading straight for the restricted section. She mentioned something about 'awakening' and 'the key.' She knows something about what I found."
	},
	
	
	// Path 2.1: Main Hall Stars
	"main_hall_stars": {
		text: `<p>You return to the main hall, manuscript notes in hand. The grand floor mosaic—a celestial map inlaid with brass stars—stretches across the center of the space.</p>
			<p>In the daytime, sunlight streams through the skylights, making the entire design shimmer. But now, under the dim night lighting, the stars seem to absorb what little light there is, creating tiny islands of darkness.</p>
			<p>You count the stars carefully. Seven in total, arranged in a pattern that resembles the constellation Ursa Major. According to the manuscript, the seventh star is significant.</p>
			<p>As you approach the seventh star—the one corresponding to Alkaid at the end of the Big Dipper's handle—you notice something unusual. The star seems to be set deeper than the others, and the surrounding marble is worn, as if many hands have touched this spot over centuries.</p>
			<p>On impulse, you press down on the star. To your surprise, it gives slightly with a soft click. Suddenly, a section of the floor near the reference desk begins to shift, revealing a hidden staircase descending into darkness.</p>
			<p>A cool draft rises from below, carrying the scent of old books and something else—something ancient and inexplicable.</p>`,
		background: "main-hall-stars.jpg",
		choices: [
		  { id: "descend_main_stairs", text: "[2.1.1] Descend the hidden staircase", next: "accept_guardian_role" },	//	descend_main_hall_stairs
		  { id: "check_surroundings", text: "[2.1.2] Check if anyone noticed the opening", next: "accept_guardian_role" },	//	check_for_witnesses
		  { id: "close_mechanism", text: "[2.1.3] Try to close the mechanism", next: "accept_guardian_role" }	//	close_star_passage
		],
		addToInventory: ["star_map"],
		addToJournal: "The manuscript led me to a hidden mechanism in the main hall's floor mosaic. The seventh star in the pattern was actually a trigger that revealed a secret staircase. There's another passage beneath the library, separate from the one behind the locked door."
	},
	
	
	// Path 2.2: Decode Riddle
	"decode_riddle": {
		text: `<p>You focus on the curious riddle from the loose page:</p>
			<p><em>"Where shadow meets light at the turning of day,<br>
			Seek the sentinel that never sleeps nor strays.<br>
			Count seven steps from Apollo's gaze,<br>
			To find the door to forgotten ways."</em></p>
			<p>The "turning of day" likely refers to either dawn or dusk. "Shadow meets light" suggests a sundial or similar timekeeper. The library has a large antique grandfather clock in the east wing—could that be the "sentinel that never sleeps nor strays"?</p>
			<p>As for "Apollo's gaze," there's a bronze statue of Apollo, god of knowledge and light, near the clock. The statue depicts him holding a book, his gaze fixed on an unseen horizon.</p>
			<p>You make your way to the east wing. The grandfather clock continues its steady rhythm, the pendulum swinging hypnotically. The statue of Apollo stands nearby, exactly as you remembered.</p>
			<p>Standing where Apollo's gaze seems directed, you count seven steps. You find yourself facing a bookshelf filled with ancient astronomical texts. Nothing seems unusual until you notice that one large tome doesn't quite match the others—its binding is slightly newer.</p>
			<p>When you pull on the book, you hear a click, and a narrow door concealed within the bookshelf opens slightly.</p>`,
		background: "apollo-statue.jpg",
		choices: [
		  { id: "open_hidden_door", text: "[2.2.1] Open the hidden door and look inside", next: "accept_guardian_role" },	// 	apollo_hidden_passage
		  { id: "examine_book", text: "[2.2.2] Examine the book that triggered the mechanism", next: "accept_guardian_role" },	//	examine_trigger_book
		  { id: "wait_for_time", text: "[2.2.3] Wait until dawn to see if something changes", next: "accept_guardian_role" }	//	wait_for_dawn
		],
		addToInventory: ["decoded_riddle"],
		addToJournal: "I decoded the riddle from the manuscript page. It led me to the statue of Apollo near the grandfather clock in the east wing. Counting seven steps from where Apollo gazes revealed a hidden mechanism—a book that, when pulled, opens a concealed door in the bookshelf."
	},
	
	
	// Path 2.3: Research Symbols
	"research_symbols": {
		text: `<p>The astronomical symbols in the manuscript margins intrigue you. Many are familiar—representations of planets and stars—but others are more obscure, possibly alchemical or from an unknown symbolic language.</p>
			<p>You head to the astronomy and occult sections, gathering reference books on ancient astronomical notations and esoteric symbology.</p>
			<p>After hours of cross-referencing, you make a breakthrough. The symbols aren't random decorations—they're coordinates of some kind, marking specific points in the library.</p>
			<p>One sequence appears repeatedly: a circle with a dot in its center (symbolizing the sun), followed by what looks like Mercury's symbol, then a triangle with a line through it.</p>
			<p>According to your research, this combination might represent "illumination through knowledge leading to transformation"—a concept central to many esoteric traditions.</p>
			<p>As you ponder this, you realize the layout of the symbols on the manuscript page mirrors the floor plan of the library's west wing. Following this pattern leads you to the medieval history section, where a particular shelf seems to align with the final symbol in the sequence.</p>
			<p>Examining the shelf closely, you discover a small metal plate bearing the same triangle symbol, hidden behind several dusty tomes on the Crusades.</p>`,
		background: "research-symbols.jpg",
		choices: [
		  { id: "press_symbol", text: "[2.3.1] Press the metal triangle symbol", next: "accept_guardian_role" },	//	activate_symbol_plate
		  { id: "continue_research", text: "[2.3.2] Continue researching the remaining symbols", next: "accept_guardian_role" },	//	deeper_symbol_research
		  { id: "consult_blackwood", text: "[2.3.3] Take your findings to Ms. Blackwood", next: "accept_guardian_role" }	//	symbols_to_blackwood
		],
		addToInventory: ["symbol_notes", "reference_books"],
		addToJournal: "The astronomical symbols in the manuscript form a complex coordinate system. I mapped them onto the library floor plan, which led me to a hidden metal plate with a triangle symbol in the medieval history section. The symbols seem to represent 'illumination through knowledge leading to transformation.'"
	},
	
	
	// Path 3.1: Follow Librarian
	"follow_librarian": {
		text: `<p>You decide to trust Ms. Blackwood and follow her through the labyrinthine stacks of Ravencrest Library. She moves with surprising swiftness for her age, navigating the maze of bookshelves with practiced ease.</p>
			<p>"The library has stood here for over three centuries," she explains as you walk. "But its foundations—and purpose—are far older."</p>
			<p>She leads you to the west wing, to a section labeled "Linguistic Theory" that few patrons ever visit. From her pocket, she produces an ornate key that looks similar to yours but made of silver rather than brass.</p>
			<p>"Your key opens one door," she says, "but there are many doors in Ravencrest. Many paths to knowledge."</p>
			<p>She inserts her key into what appears to be a simple maintenance panel. It swings open to reveal a hidden elevator cabin lined with dark wood and brass fittings—clearly very old but immaculately maintained.</p>
			<p>"This library serves as a repository for knowledge that some believe should remain hidden," she says as you both enter the elevator. "We are its custodians. We protect the world from dangerous knowledge, and protect valuable knowledge from a world that might destroy it."</p>
			<p>The elevator descends smoothly, taking you deep below the library's foundations.</p>`,
		background: "hidden-elevator.jpg",
		choices: [
		  { id: "ask_about_role", text: "[3.1.1] Ask about your role in all this", next: "accept_guardian_role" },	//	question_your_role
		  { id: "ask_about_library", text: "[3.1.2] Ask about the library's true purpose", next: "accept_guardian_role" },	//	library_true_purpose
		  { id: "express_concern", text: "[3.1.3] Express concern about where she's taking you", next: "accept_guardian_role" }	//	elevator_concerns
		],
		addToInventory: ["silver_key_impression"],
		addToJournal: "I followed Ms. Blackwood to a hidden elevator behind a panel in the Linguistic Theory section. She has a silver key similar to my brass one. She mentioned the library being a repository for knowledge that 'should remain hidden' and spoke of custodians who protect the world from dangerous knowledge. We're descending to somewhere deep beneath the library."
	},
	
	
	// Path 3.2: Question Librarian
	"question_librarian": {
		text: `<p>"Before I go anywhere," you say, "I need to know more. What exactly is this key? What collection was 'thought to be lost'? And what did you mean when you said the library 'chooses people'?"</p>
			<p>Ms. Blackwood regards you thoughtfully, then gestures to the chair across from her desk. As you sit, she opens an ornate wooden box on her shelf and retrieves what appears to be a very old journal bound in faded leather.</p>
			<p>"Ravencrest was founded in 1721," she begins, "but its purpose was never solely to be a public library. The founders were members of a scholarly society dedicated to collecting and preserving knowledge—all knowledge, including that which might be dangerous in the wrong hands."</p>
			<p>She opens the journal, showing you pages filled with elegant script and strange diagrams. "This is the journal of Elias Ravencrest himself. He designed the library to be both a public institution and a secure repository for texts of... unusual provenance."</p>
			<p>"The key you found," she continues, "belongs to a set of seven, each opening different chambers where the most sensitive materials are kept. We thought the brass key was lost during renovations in the 1940s."</p>
			<p>She looks at you intently. "As for the library choosing people—over generations, we've observed that certain individuals seem drawn to specific artifacts or areas of the collection. They find things that should be impossible to find. Like you found this key. We believe the library itself has a kind of... awareness. A purpose."</p>`,
		background: "blackwood-office.jpg",
		choices: [
		  { id: "agree_to_see", text: "[3.2.1] Agree to see what Ms. Blackwood wants to show you", next: "follow_librarian" },
		  { id: "ask_about_society", text: "[3.2.2] Ask more about the scholarly society", next: "inquiry_scholarly_society" },
		  { id: "request_time", text: "[3.2.3] Request time to think about all this", next: "accept_guardian_role" }	//	request_thinking_time
		],
		addToInventory: ["historical_notes"],
		addToJournal: "Ms. Blackwood explained that Ravencrest Library was founded in 1721 by a scholarly society dedicated to preserving all knowledge, including dangerous texts. My brass key is one of seven that open different chambers for sensitive materials. The library apparently has some form of awareness that draws specific people to certain artifacts—which is why I found the key that had been lost since the 1940s."
	},
	
	
	// Path 3.3: Decline Librarian
	"decline_librarian": {
		text: `<p>"I appreciate the offer, Ms. Blackwood," you say politely, "but I think I should return the key and stick to my regular duties. I'm not looking for... whatever this is."</p>
			<p>A flash of disappointment crosses her face, quickly replaced by understanding. "I respect your decision," she says, extending her hand for the key. "Not everyone is ready for the responsibilities that come with certain knowledge."</p>
			<p>You place the brass key in her palm, feeling a strange reluctance as you do. She closes her fingers around it and nods.</p>
			<p>"If you change your mind, you know where to find me," she says. "But I should warn you—now that the library has taken notice of you, things may not return to how they were before. Knowledge, once glimpsed, is difficult to unsee."</p>
			<p>You leave her office and return to your duties, trying to focus on ordinary tasks. Yet throughout your shift, unusual occurrences continue—books falling from shelves as you pass, whispers in empty rooms, and most disturbingly, the same page appearing in different books you open—always featuring an illustration of a brass key.</p>
			<p>Near dawn, exhausted and unnerved, you find yourself back at the restricted section. The door you had found earlier stands slightly ajar, a warm light spilling from within. A voice—neither male nor female, neither young nor old—calls your name from beyond the threshold.</p>`,
		background: "beckoning-doorway.jpg",
		choices: [
		  { id: "reconsider_enter", text: "[3.3.1] Enter the doorway despite your earlier reluctance", next: "accept_guardian_role" },	//	reconsider_threshold
		  { id: "find_blackwood", text: "[3.3.2] Go find Ms. Blackwood immediately", next: "accept_guardian_role" },	//	seek_blackwood_help
		  { id: "resist_call", text: "[3.3.3] Resist the call and leave the library", next: "accept_guardian_role" }	//	resist_library_call
		],
		addToJournal: "I declined Ms. Blackwood's offer and returned the brass key to her. She warned me that 'now that the library has taken notice of you, things may not return to how they were before.' She was right—strange things have been happening all night: whispering, books falling, and the same illustration of a brass key appearing in different books. Now I've found the restricted section door ajar with a voice calling my name from within."
	},
	
	
	// Path 4.2: Show Key Morning
	"show_key_morning": {
		text: `<p>You retrieve the key from your desk drawer and show it to Ms. Blackwood, but maintain your composure. "I'd like to know more about this key before going anywhere," you say.</p>
			<p>Ms. Blackwood examines the key, turning it over in her hands. Her expression is a mixture of reverence and concern.</p>
			<p>"This is the Archivist's Key," she explains. "One of seven created by the library's founder, Elias Ravencrest. Each key opens a different section of what we call the True Library—the hidden repository beneath us."</p>
			<p>She returns the key to you, surprising you. "The key found you for a reason. Last night, at precisely 3:17 AM, our sensors detected an energy surge throughout the building. The threshold between the public library and the True Library thinned momentarily. Something is changing in the deeper reality of this place."</p>
			<p>She glances at the grandfather clock in her office. "The threshold will remain permeable until noon. After that, it may be weeks or months before another opportunity arises."</p>
			<p>She rises from her chair. "I understand your hesitation. But I should warn you that once the library has chosen someone, they rarely find peace until they've answered its call. The decision is yours, but know that time is limited."</p>`,
		background: "morning-office.jpg",
		choices: [
		  { id: "go_now", text: "[4.2.1] Decide to go with her now", next: "follow_librarian" },
		  { id: "keep_key", text: "[4.2.2] Keep the key but delay the decision", next: "accept_guardian_role" },	//	delay_with_key
		  { id: "research_first", text: "[4.2.3] Ask to research the Ravencrest family first", next: "accept_guardian_role" }	//	research_founders
		],
		addToInventory: ["brass_key", "threshold_knowledge"],
		addToJournal: "Ms. Blackwood called my key the 'Archivist's Key'—one of seven created by Elias Ravencrest, the library's founder. She mentioned a 'True Library' hidden beneath us and explained that at 3:17 AM last night, something caused a 'thinning' between the public library and this hidden repository. This 'threshold' will remain open until noon today. She believes the library has chosen me for some purpose."
	},
	
	
	// Path 4.3: Deny Key Finding
	"deny_key_finding": {
		text: `<p>"I'm not sure what you're talking about," you say, maintaining a neutral expression. "I was just doing my regular rounds last night. Nothing unusual."</p>
			<p>Ms. Blackwood studies you for a long moment, her piercing gaze making you feel transparent. "The library has many ways of communicating," she finally says. "Sometimes through dreams, sometimes through 'coincidences,' and sometimes... through denial."</p>
			<p>She walks to her bookshelf and pulls down a leather-bound volume. Opening it to a marked page, she shows you an illustration that makes your breath catch—it's the exact key you found, rendered in precise detail down to the unusual teeth and ornate handle.</p>
			<p>"The Archivist's Key hasn't been seen in 80 years," she says quietly. "Its reappearance now is significant. The library is preparing for something."</p>
			<p>She closes the book. "I won't press you further. But know this: that key found you for a reason. The library doesn't make mistakes in its selections."</p>
			<p>She hands you a small card with a symbol that matches one you noticed on the manuscript. "If you change your mind—or when the dreams begin—come find me. Day or night."</p>
			<p>As you leave her office, the weight of the key in your pocket seems to grow heavier, as if demanding acknowledgment.</p>`,
		background: "blackwood-knowing.jpg",
		choices: [
		  { id: "admit_truth", text: "[4.3.1] Return and admit the truth", next: "accept_guardian_role" },	//	return_admit_finding
		  { id: "investigate_alone", text: "[4.3.2] Investigate the key's purpose yourself", next: "accept_guardian_role" },	//	solo_key_research
		  { id: "leave_library", text: "[4.3.3] Leave the library and try to forget the whole thing", next: "accept_guardian_role" }	//	attempt_to_forget
		],
		addToInventory: ["symbolic_card"],
		addToJournal: "I denied finding the key, but Ms. Blackwood wasn't fooled. She showed me an illustration of the exact key in an old book, calling it the 'Archivist's Key' that hasn't been seen in 80 years. She said the library doesn't make mistakes in who it selects and gave me a card with a strange symbol, telling me to find her 'when the dreams begin.' I left without admitting anything, but the key feels heavy in my pocket."
	},
	
	
	
  
	// Path 1.1.1: Read the glowing book
	"read_ancient_book": {
		text: `<p>Drawn by an irresistible curiosity, you approach the glowing tome. The blue light pulses gently as if acknowledging your presence.</p>
			<p>As you lean over the book, the symbols on the page suddenly stop shifting and arrange themselves into words you can understand. The transformation is mesmerizing.</p>
			<p>The text speaks of "gateways between worlds" and "keepers of knowledge." It describes the Ravencrest Library as one of many "nexus points" where realities intersect.</p>
			<p>According to the book, certain individuals—Librarians with a capital L—are chosen to guard these intersections and facilitate the exchange of knowledge between worlds.</p>
			<p>As you continue reading, you sense a presence behind you. You turn to find an elderly woman watching you with keen eyes that seem to hold centuries of wisdom.</p>
			<p>"I've been waiting for you," she says with a gentle smile. "Not everyone can read the Codex. It appears the library has chosen its next Guardian."</p>`,
		background: "reading-ancient-book.jpg",
		choices: [
			{ id: "accept_guardian", text: "[1.1.1.1] Ask about becoming a Guardian", next: "accept_guardian_role" },
			{ id: "question_woman", text: "[1.1.1.2] Question who she is", next: "question_elder_librarian" },
			{ id: "reject_destiny", text: "[1.1.1.3] Reject this strange destiny", next: "reject_guardian_role" }
		],
		addToInventory: ["codex_page"],
		addToJournal: "The book—which I now know is called the Codex—revealed incredible secrets about the library. It's apparently a nexus point between worlds, and there are chosen Guardians who protect these intersections. An elderly woman appeared and suggested I've been chosen as the next Guardian."
	},
		
		
	// Path 1.1.2: Explore the archive further
	"explore_archive": {
		text: `<p>Deciding to explore before approaching the glowing book, you venture deeper into the archive. Row after row of ancient texts stretch before you, each shelf meticulously 	labeled in scripts both familiar and utterly foreign.</p>
			<p>In one corner, you discover what appears to be a reading area—a circular table surrounded by comfortable chairs that look surprisingly modern compared to the ancient surroundings.</p>
			<p>On the table lies an open journal, its pages filled with elegant handwriting. It appears to be a log kept by previous librarians, with entries dating back centuries.</p>
			<p>The most recent entry is dated just last week:</p>
			<p><em>"The boundaries grow thinner with each passing day. I fear we may need to select a new Guardian sooner than anticipated. There are signs that someone has been chosen, though they may not yet realize their connection to the library. I must prepare for the transition."</em></p>
			<p>As you read these words, a soft cough behind you makes you turn. An elderly woman stands there, watching you with knowing eyes.</p>
			<p>"I see you've found my journal," she says. "I am Eleanor Blackwood, though most know me simply as the senior librarian. But my true role here is far more significant."</p>`,
		background: "archive-reading-area.jpg",
		choices: [
			{ id: "ask_about_guardian", text: "[1.1.2.1] Ask about the Guardian role", next: "guardian_explanation" },
			{ id: "ask_about_journal", text: "[1.1.2.2] Ask about the journal entries", next: "journal_explanation" },
			{ id: "admit_trespassing", text: "[1.1.2.3] Apologize for trespassing", next: "apologize_trespassing" }
		],
		addToInventory: ["librarian_journal"],
		addToJournal: "I explored the hidden archive and found a journal belonging to Ms. Blackwood. It mentions 'boundaries growing thinner' and the need to select a 'new Guardian.' Ms. Blackwood appeared and revealed she's more than just the senior librarian."
	},
	
	
	// Path 1.1.3: Return upstairs
	"return_from_archive": {
		text: `<p>The mysteries of the archive and the glowing book unsettle you. Deciding that some secrets are better left undisturbed, you turn back toward the spiral staircase.</p>
			<p>As you place your foot on the first step, a soft voice calls out from behind you.</p>
			<p>"Few find their way here only to leave without seeking knowledge."</p>
			<p>You turn to find an elderly woman watching you with keen eyes that seem to hold centuries of wisdom.</p>
			<p>"I am Eleanor Blackwood," she says, "though you know me as the senior librarian. This place has been waiting for someone new—someone who could find their way here."</p>
			<p>She gestures around at the vast archive. "The key you found was meant for you. It only works for those the library chooses."</p>
			<p>She approaches slowly, her expression gentle but serious. "I understand your hesitation. The unknown can be frightening. But there are wonders here beyond imagination—and responsibilities that must be passed on."</p>
			<p>"The choice remains yours," she continues. "You may leave now and return to your ordinary life, though the memory of this place will never leave you. Or you can stay and learn why you were chosen."</p>`,
		background: "spiral-staircase.jpg",
		choices: [
			{ id: "change_mind_stay", text: "[1.1.3.1] Change your mind and stay to learn more", next: "decide_to_learn" },
			{ id: "insist_leaving", text: "[1.1.3.2] Insist on leaving", next: "leave_archive" },
			{ id: "ask_time_consider", text: "[1.1.3.3] Ask for time to consider the choice", next: "request_time" }
		],
		addToJournal: "I tried to leave the archive, but Ms. Blackwood—the senior librarian—appeared and revealed that the key was meant for me. She said I was 'chosen' by the library itself and offered to explain why, though she's also giving me the choice to walk away."
	},
	
	
	// Path 1.2.1: Follow Ms. Blackwood secretly (connecting paths)
	"follow_blackwood_secretly": {
		text: `<p>Deciding to remain unseen, you quietly follow Ms. Blackwood from a distance. She moves with purpose through the darkened library, her footsteps barely audible on the marble floors.</p>
			<p>She enters the restricted section and approaches the very door you discovered earlier. From your hiding spot behind a tall bookshelf, you watch as she produces a key identical to yours and unlocks the door.</p>
			<p>Before entering, she pauses and speaks softly, seemingly to the empty air: "The threshold is thinning. We need to prepare for the transition."</p>
			<p>She disappears down the staircase, leaving the door slightly ajar. You wait several minutes, torn between curiosity and caution. Finally, you approach the door and peer down the staircase.</p>
			<p>A soft blue glow emanates from below—the same color you glimpsed earlier. Quiet voices echo up the spiral stairs, Ms. Blackwood's among them, though you can't make out the words.</p>
			<p>As you lean closer to listen, your flashlight slips from your pocket and clatters noisily down several steps. The voices immediately cease.</p>
			<p>"We have a visitor," calls Ms. Blackwood's voice, calm but commanding. "Please join us. It's time you understood what's happening."</p>`,
		background: "staircase-discovery.jpg",
		choices: [
		  { id: "join_meeting", text: "[1.2.1.1/1.3.1.1] Descend and join them", next: "join_secret_council" },
		  { id: "apologize_retreat", text: "[1.2.1.2/1.3.1.2] Apologize and retreat", next: "apologetic_retreat" },
		  { id: "run_away", text: "[1.2.1.3/1.3.1.3] Run away", next: "flee_discovery" }
		],
		addToJournal: "I followed Ms. Blackwood to the same hidden door I'd found earlier. She used a key like mine to open it and mentioned something about 'the threshold thinning' and 'preparing for the transition.' When I tried to eavesdrop on the meeting below, I accidentally dropped my flashlight. Ms. Blackwood invited me to join them, saying it's time I understood what's happening."
	},
	
	
	// Path 1.2.2: Return Door With Light
	"return_door_with_light": {
		text: `<p>Armed with the flashlight, you return to the restricted section. The door remains as you left it, key still in the lock, waiting.</p>
			<p>The beam of your flashlight cuts through the darkness as you begin your descent down the spiral staircase. The walls are lined with ancient stone, adorned with faded carvings that depict scenes of scholars and strange, otherworldly landscapes.</p>
			<p>The staircase seems to descend much deeper than should be possible given the library's architecture. After several minutes of careful stepping, you reach the bottom.</p>
			<p>Your flashlight reveals an immense underground chamber filled with countless bookshelves, stretching farther than your light can reach. The air is cool but not stale—somehow fresh despite being underground.</p>
			<p>In the center of the chamber stands a pedestal holding an open book that emits a soft blue glow. Even from a distance, you can see its pages seem to turn by themselves, rippling as if stirred by an invisible breeze.</p>
			<p>As you move toward it, your flashlight flickers and then dies, but the book's blue radiance provides enough light to see by. Something about it draws you forward, as if it's been waiting for you.</p>`,
		background: "archive-with-flashlight.jpg",
		choices: [
			{ id: "approach_glowing_book", text: "[1.2.2.1] Approach the glowing book", next: "approach_book_with_light" },
			{ id: "explore_shelves", text: "[1.2.2.2] Explore the nearby shelves first", next: "explore_archive_shelves" },
			{ id: "check_surroundings", text: "[1.2.2.3] Carefully examine the chamber for other exits", next: "examine_archive_chamber" }
		],
		addToInventory: ["flashlight"],
		addToJournal: "I returned to the hidden door with my flashlight and descended a spiral staircase that went impossibly deep underground. At the bottom, I discovered an enormous chamber filled with bookshelves and a pedestal holding a glowing blue book at its center. My flashlight died, but the book's glow provides enough light to see. Something about this place feels ancient and powerful—like I've stumbled upon knowledge that few have ever accessed."
	},
	
	
	// Path 1.2.3: Confront Blackwood
	"confront_blackwood": {
		text: `<p>You step out of the maintenance closet, flashlight in hand. "Ms. Blackwood? What are you doing here so late?"</p>
			<p>She turns sharply, momentarily startled. Her eyes narrow when she sees you, then quickly soften into her usual professional demeanor.</p>
			<p>"Ah, it's you. I might ask the same question," she replies with a measured smile. "Night shifts can be quite... eventful, can't they?"</p>
			<p>There's something in her tone that suggests she knows more than she's letting on. She glances at the flashlight in your hand.</p>
			<p>"Planning an expedition?" she asks, her voice casual but her eyes intense.</p>
			<p>You hesitate, unsure how much to reveal about your discovery. Before you can decide, she continues.</p>
			<p>"I've worked in this library for forty years," she says softly. "I know all its secrets—including the door you found in the restricted section." She extends her hand. "Perhaps we should talk. There are things you need to understand about Ravencrest."</p>`,
		background: "confronting-blackwood.jpg",
		choices: [
			{ id: "admit_discovery", text: "[1.2.3.1] Admit what you found and ask for explanations", next: "admit_to_blackwood" },
			{ id: "deny_everything", text: "[1.2.3.2] Deny finding anything unusual", next: "deny_to_blackwood" },
			{ id: "suggest_together", text: "[1.2.3.3] Suggest exploring the door together", next: "explore_with_blackwood" }
		],
		addToInventory: ["flashlight"],
		addToJournal: "I confronted Ms. Blackwood when I saw her heading to the restricted section. She seemed surprised to see me but quickly recovered. She knew about the door I'd found and offered to explain the secrets of Ravencrest Library. She's worked here for forty years—if anyone knows what's going on, it would be her. I need to decide how much I trust her."
	},
	

	// Path 1.3.2: Approach Ms. Blackwood and show her the key
	"approach_with_key": {
		text: `<p>You reach into your pocket and pull out the brass key, extending it toward Ms. Blackwood. "I found this in an old manuscript. It opened this door, but I wasn't sure if I should..."</p>
			<p>She takes the key from you, her fingers tracing its intricate patterns with familiarity. "This hasn't been seen in decades," she murmurs. "The Archivist's Key—it appears when the library chooses a new Keeper."</p>
			<p>Her eyes meet yours with new intensity. "Do you believe in fate? This library is more than just a collection of books. It stands at the crossroads of knowledge from many worlds."</p>
			<p>She steps toward the door, inserting the key once more. This time, when it turns, a soft blue light spills from the crack as the door swings open.</p>
			<p>"The Archive calls to you," she says, gesturing toward the illuminated staircase that now seems less foreboding. "I can guide you, if you wish to learn its secrets. Or you can walk away—though the library rarely accepts rejection once it has chosen."</p>`,
		background: "blackwood-with-key.jpg",
		choices: [
			{ id: "accept_guidance", text: "[1.3.2.1] Accept Ms. Blackwood's guidance", next: "guided_by_blackwood" },
			{ id: "request_explanation", text: "[1.3.2.2] Request a full explanation before proceeding", next: "blackwood_explanation" },
			{ id: "politely_decline", text: "[1.3.2.3] Politely decline and leave", next: "decline_archive_invitation" }
		],
		addToJournal: "I showed Ms. Blackwood the key I found. She called it 'The Archivist's Key' and said it appears when the library chooses a new 'Keeper.' When she used it on the door, blue light poured out and the staircase looked completely different. She offered to guide me through what she called 'The Archive' and mentioned something about the library 'standing at the crossroads of knowledge from many worlds.' This is getting stranger by the minute."
	},


	// Path 1.3.3: Hide the key and pretend nothing happened
	"hide_key_continue": {
		text: `<p>A surge of self-preservation takes over. You casually slide the key deeper into your pocket and force a smile.</p>
			<p>"I was just checking the inventory in the restricted section," you lie, trying to keep your voice steady. "I thought I heard something unusual."</p>
			<p>Ms. Blackwood's eyes narrow almost imperceptibly. She studies your face for an uncomfortably long moment before her expression softens into a polite smile that doesn't quite reach her eyes.</p>
			<p>"Of course," she says. "The old building settles at night. Many find it... unsettling."</p>
			<p>She gestures for you to walk with her back to the main hall. As you leave the restricted section, you can't shake the feeling that she knows you're hiding something.</p>
			<p>For the remainder of your shift, strange occurrences plague you. Books fall from shelves as you pass. Lights flicker in your peripheral vision. Twice, you hear your name whispered when no one is nearby.</p>
			<p>When dawn finally breaks, you're exhausted and on edge. As you prepare to leave, Ms. Blackwood appears at your desk, placing a small, leather-bound book before you.</p>
			<p>"Perhaps this will help you understand what you're experiencing," she says cryptically. "The library doesn't give up easily once it's chosen someone."</p>`,
		background: "main-hall-night.jpg",
		choices: [
			{ id: "take_book", text: "[1.3.3.1] Take the book and read it", next: "read_blackwood_book" },
			{ id: "return_key", text: "[1.3.3.2] Return the key and ask for an explanation", next: "surrender_key" },
			{ id: "escape_library", text: "[1.3.3.3] Leave without taking the book", next: "flee_library" }
		],
		addToInventory: ["leather_book"],
		addToJournal: "I tried to hide the key and pretend I hadn't found anything unusual, but Ms. Blackwood seemed suspicious. After I left the restricted section, strange things started happening—falling books, flickering lights, and whispered voices. When my shift ended, Ms. Blackwood gave me a small leather book, saying it would help me 'understand what I'm experiencing.' She mentioned that 'the library doesn't give up easily once it's chosen someone.' I'm starting to think there's no escaping whatever I've stumbled into."
	},
	
	
	
	// Path 1.1.1.1: Accept becoming a Guardian
	"accept_guardian_role": {
		text: `<p>"What exactly is a Guardian?" you ask, finding yourself drawn to the elderly woman and the knowledge she represents.</p>
			<p>She smiles warmly. "A Guardian protects the balance between worlds. We ensure knowledge flows safely across boundaries without allowing dangerous elements to pass through."</p>
			<p>She gestures around at the archive. "This library exists in many planes simultaneously. What appears as fiction in one world may be history in another. The Codex helps us navigate these currents of information."</p>
			<p>She extends her hand. "I am Elara, the current Guardian of Ravencrest, though my time is ending. I've watched you since you arrived—your curiosity, your respect for knowledge, your intuition. The Codex responding to you confirms what I already suspected."</p>
			<p>Over the following weeks, Elara teaches you the secret history of the library and the responsibilities of a Guardian. You learn to access different sections of the archive that exist between realities and to understand the Codex's shifting text.</p>
			<p>Six months later, in a ceremony attended by Guardians from other nexus points around the world, you formally accept the role of Ravencrest's new Guardian.</p>
			<p>Your life has changed forever, but as you stand in the hidden archive, the Codex glowing before you and infinite knowledge at your fingertips, you know you've found your true calling.</p>
			<p class="ending">THE END - You have become the new Guardian of Ravencrest Library</p>`,
		background: "guardian-ceremony.jpg",
		ending: "guardian",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "I've accepted my destiny as the next Guardian of Ravencrest Library. Elara, the elderly woman, has been training me in the secret arts of maintaining the balance between worlds. The library exists across multiple planes of reality, and as Guardian, I'll protect the flow of knowledge between them. Today I participated in a formal ceremony officially making me the new Guardian. My ordinary life is behind me, but an extraordinary one has just begun."
	},
	

	// Path 1.1.1.2: Question who she is
	"question_elder_librarian": {
		text: `<p>"Who are you?" you ask, taking a step back from the elderly woman. "And how did you get down here?"</p>
			<p>The woman's smile remains gentle. "My name is Elara Blackwood, though most know me simply as Ms. Blackwood, the senior librarian. But that title barely scratches the surface of my actual role here."</p>
			<p>"I am the current Guardian of Ravencrest—the nineteenth in an unbroken line stretching back to the library's founding in 1721. I've served for nearly fifty years, maintaining the balance between worlds and protecting the knowledge that flows between them."</p>
			<p>She gestures to the glowing book. "The Codex recognizes you. It doesn't reveal its secrets to just anyone—only to those with the potential to become Guardians themselves."</p>
			<p>She takes a seat at a nearby reading table and motions for you to join her. "Ravencrest exists at what we call a nexus point—an intersection of multiple realities. The books here aren't merely about different worlds; many of them come from those worlds."</p>
			<p>"Fiction and non-fiction are more fluid concepts than most realize," she continues. "What's history in one world may be fantasy in another. The Codex helps us navigate these currents of knowledge and maintain the proper boundaries."</p>
			<p>"My time as Guardian is coming to an end," she says with a hint of sadness. "And the library has chosen you as my potential successor. The question is: are you willing to learn?"</p>`,
		background: "elara-explanation.jpg",
		choices: [
			{ id: "express_interest", text: "[1.1.1.2.1] Express interest in learning more", next: "begin_guardian_training" },
			{ id: "ask_for_proof", text: "[1.1.1.2.2] Ask for proof of other realities", next: "reality_demonstration" },
			{ id: "express_skepticism", text: "[1.1.1.2.3] Express skepticism about the whole situation", next: "convince_skeptic" }
		],
		addToJournal: "The elderly woman revealed herself to be Elara Blackwood—the senior librarian I already knew, but she's actually the current Guardian of Ravencrest Library. She explained that the library exists at a 'nexus point' between multiple realities, and the glowing book (the Codex) only reveals its secrets to potential future Guardians. She believes I've been chosen as her successor."
	},
	

	// Path 1.1.1.3: Reject this strange destiny
	"reject_guardian_role": {
		text: `<p>"This is too much," you say, backing away from the book and the elderly woman. "I'm just a night librarian—not some 'chosen one' or Guardian of knowledge between worlds."</p>
			<p>The woman watches you with understanding in her eyes. "The calling is never forced upon anyone. The choice must be yours freely made."</p>
			<p>She approaches slowly, her manner non-threatening. "My name is Elara. I've been the Guardian of Ravencrest for nearly half a century, but I won't be able to maintain the boundaries much longer. The library chose you, but you must choose it in return."</p>
			<p>"Know this," she continues. "Once you've seen beyond the veil, you cannot unsee it. The key you found will remain yours, as will the memory of this place. The door will remain open to you, should you change your mind."</p>
			<p>She gestures toward the spiral staircase. "You may return to your life above. But I suspect the library will continue to call to you in subtle ways."</p>
			<p>You make your way back up the stairs, emerging once more into the restricted section. In the days that follow, you try to resume your normal duties, but something has changed.</p>
			<p>You notice patterns in the library you never saw before—symbols hidden in the architecture, subtle connections between seemingly unrelated texts. Sometimes books appear on your desk that you don't remember retrieving—always open to passages about choices, destinies, and hidden worlds.</p>
			<p>And at night, you dream of the glowing book and its shifting symbols, calling you back to the archive below.</p>`,
		background: "returning-upstairs.jpg",
		choices: [
			{ id: "reconsider_later", text: "[1.1.1.3.1] Reconsider your decision after two weeks", next: "accept_guardian_role" },	// return_to_archive
			{ id: "research_library", text: "[1.1.1.3.2] Research the library's history secretly", next: "accept_guardian_role" },	// research_ravencrest
			{ id: "seek_elara", text: "[1.1.1.3.3] Seek out Elara to discuss your experiences", next: "accept_guardian_role" }	//	reconnect_elara
		],
		addToJournal: "I rejected Elara's offer to become a Guardian, telling her it was too much for me to accept. She was understanding and said the choice had to be mine freely made. I've returned to my regular duties, but I can't unsee what I've discovered. I'm noticing strange patterns in the library now, and books related to hidden worlds and destinies keep appearing. At night, I dream of the Codex and its mysterious symbols."
	},	
	
	
	// Path 1.1.2.1: Ask about the Guardian role
	"guardian_explanation": {
		text: `<p>"What exactly is a Guardian?" you ask, intrigued by her words.</p>
			  <p>Ms. Blackwood gestures for you to sit at the reading table. As you both settle into the chairs, the atmosphere in the archive seems to shift—the air grows still, as if the very space is listening.</p>
			  <p>"Ravencrest is more than just a library," she begins. "It's what we call a nexus point—a place where multiple realities intersect. The books here aren't merely records of our world, but windows into countless others."</p>
			  <p>She runs her fingers along the journal's edge. "A Guardian maintains the boundaries between these worlds, ensuring knowledge flows safely between them while preventing dangerous elements from crossing over."</p>
			  <p>"Some texts contain power—actual magic, scientific innovations beyond our understanding, philosophical concepts that can transform societies. In the wrong hands, such knowledge could be devastating."</p>
			  <p>Her eyes meet yours with unexpected intensity. "For centuries, Guardians have protected this balance. I've served for nearly fifty years, but my time is ending. The library itself chooses its Guardians, and it appears to have selected you as my successor."</p>
			  <p>She smiles at your expression of disbelief. "The brass key that led you here doesn't work for just anyone. The fact that you could use it is significant."</p>`,
		background: "guardian-explanation.jpg",
		choices: [
			{ id: "ask_why_me", text: "[1.1.2.1.1] Ask why you were chosen", next: "why_chosen" },
			{ id: "request_proof", text: "[1.1.2.1.2] Request proof of other realities", next: "reality_demonstration" },
			{ id: "accept_role", text: "[1.1.2.1.3] Express willingness to learn more about the role", next: "accept_guardian_role" }	//	guardian_training_begins
		],
		addToJournal: "Ms. Blackwood explained what a Guardian is—someone who maintains the balance between multiple realities that intersect at Ravencrest Library. She says the library itself chooses its Guardians, and apparently, it has selected me as her successor. The brass key I found was some kind of test or sign."
	},
	

	// Path 1.1.2.2: Ask about the journal entries
	"journal_explanation": {
		text: `<p>"Your journal mentions boundaries growing thinner," you say. "What does that mean?"</p>
			  <p>Ms. Blackwood's expression grows serious as she takes a seat across from you. She gently closes the journal, her fingers lingering on its worn cover.</p>
			  <p>"The barriers between worlds naturally fluctuate," she explains. "However, in recent months, they've become increasingly unstable. Books from different realities are appearing on our shelves without proper transition. Characters from fictional works have been glimpsed in the margins of reality."</p>
			  <p>She lowers her voice, though you're alone in the archive. "Last week, a patron requested a copy of Dickens and received a version where the ending was completely different—one written in a world where Dickens made different creative choices."</p>
			  <p>"Such small inconsistencies are usually manageable, but they're growing more frequent. Without intervention, the boundaries could collapse entirely, merging realities in ways that would create chaos."</p>
			  <p>She looks at you with surprising hope in her eyes. "Each Guardian serves for a time before passing the responsibility to another. I've maintained the balance for nearly fifty years, but my connection to the nexus is weakening. The library has chosen you as my successor—the key you found responds only to those with potential to become Guardians."</p>
			  <p>"The question is," she continues, "are you willing to learn?"</p>`,
		background: "journal-discussion.jpg",
		choices: [
			{ id: "ask_about_dangers", text: "[1.1.2.2.1] Ask about the dangers involved", next: "guardian_dangers" },
			{ id: "inquire_training", text: "[1.1.2.2.2] Inquire about what training entails", next: "accept_guardian_role" },	//	training_details
			{ id: "need_time", text: "[1.1.2.2.3] Say you need time to consider", next: "time_to_consider" }
		],
		addToJournal: "Ms. Blackwood explained that the 'thinning boundaries' in her journal refer to weakening barriers between different realities. Books from other worlds are appearing, and fictional elements are bleeding into our reality. She believes I've been chosen as her successor as Guardian, and that without proper maintenance, these boundaries could collapse entirely, causing chaos."
	},
	

	// Path 1.1.2.3: Apologize for trespassing
	"apologize_trespassing": {
		text: `<p>"I'm sorry for trespassing," you say, standing quickly. "I had no idea this place was restricted."</p>
			  <p>Ms. Blackwood raises a hand reassuringly. "No need for apologies. You couldn't have found your way here if the library hadn't permitted it."</p>
			  <p>She approaches the table and closes her journal. "The brass key you found is very special. It doesn't work for just anyone—in fact, most people could put it in that lock and turn it all day without result."</p>
			  <p>Her eyes study you with careful assessment. "The key is a test of sorts. For centuries, Ravencrest has selected its own Guardians—individuals with the capacity to perceive and navigate the spaces between realities."</p>
			  <p>"Guardians?" you ask, your curiosity overcoming your discomfort.</p>
			  <p>She nods. "This library exists at an intersection of multiple worlds—a nexus point where knowledge flows between realities. Some books here contain histories from worlds different from our own, sciences beyond our current understanding, even magic that functions according to different natural laws."</p>
			  <p>"A Guardian maintains these boundaries, facilitates the safe exchange of knowledge, and prevents dangerous elements from crossing over." She smiles gently. "I've served in this role for nearly fifty years, but my time is ending. The library appears to have chosen you as my potential successor."</p>`,
		background: "blackwood-explanation.jpg",
		choices: [
			{ id: "express_disbelief", text: "[1.1.2.3.1] Express disbelief", next: "skepticism_response" },
			{ id: "show_interest", text: "[1.1.2.3.2] Show interest in learning more", next: "initial_guardian_lesson" },
			{ id: "polite_exit", text: "[1.1.2.3.3] Try to politely exit the situation", next: "attempt_departure" }
		],
		addToJournal: "I apologized to Ms. Blackwood for trespassing, but she wasn't upset. She explained that the brass key was a test and that Ravencrest Library exists at an intersection of multiple realities. She's been serving as a 'Guardian' who maintains the boundaries between worlds, and she believes I've been chosen as her successor."
	},
	

	// Path 1.1.3.1: Change mind and stay
	"decide_to_learn": {
		text: `<p>Something in Ms. Blackwood's words resonates with you. The pull of discovery outweighs your caution.</p>
			<p>"I'll stay," you say. "I want to understand why I was chosen."</p>
			<p>Relief washes over her face. "Thank you. The transition is always a delicate time."</p>
			<p>She leads you back to the center of the archive where the glowing book—the Codex, as she calls it—still rests on its pedestal.</p>
			<p>"Ravencrest is more than just a library," she explains. "It's a nexus point between realities, a place where knowledge from countless worlds converges. The Codex is our guide to these intersections."</p>
			<p>She gently places her hand on the book, and the blue glow intensifies. "For centuries, Guardians like myself have maintained the balance, ensuring safe passage of knowledge while preventing dangerous elements from crossing over."</p>
			<p>"But no Guardian serves forever," she says, her voice softening. "My time is ending, and the library has chosen you as my successor."</p>`,
		background: "codex-explanation.jpg",
		choices: [
			{ id: "accept_training", text: "Accept the offer to train as a Guardian", next: "begin_guardian_training" },
			{ id: "request_proof", text: "Request proof of these other realities", next: "reality_demonstration" },
			{ id: "express_doubts", text: "Express doubts about your suitability", next: "address_guardian_doubts" }
		],
		addToJournal: "I decided to stay and learn more. Ms. Blackwood revealed that Ravencrest is a nexus point between different realities, and that she is a Guardian who maintains the balance between worlds. Most shocking of all, she believes I'm meant to be her successor. The Codex is apparently the key to navigating these intersections between worlds."
	},
	

	// Path 1.1.3.2: Insist on leaving
	"leave_archive": {
		text: `<p>"I'm sorry," you say firmly. "This is all too much. I need to leave."</p>
			<p>Ms. Blackwood's expression shows disappointment, but she nods with understanding. "The choice must always be freely made. I cannot and will not force this path upon you."</p>
			<p>She steps aside, clearing your way to the stairs. "Know that the door will always remain open to you, should you change your mind. The key is yours to keep."</p>
			<p>You climb the spiral staircase, emerging once more into the restricted section. The hidden door closes behind you with a soft click.</p>
			<p>In the days that follow, you try to return to your normal routine, but something has changed. You notice subtle details in the library you never saw before—symbols hidden in the architecture, patterns in how the books are arranged.</p>
			<p>Sometimes you catch Ms. Blackwood watching you with patient eyes. And at night, you dream of the glowing book and endless rows of knowledge waiting to be discovered.</p>
			<p>The brass key remains warm in your pocket, a constant reminder of the choice you made—and the one you could still make.</p>`,
		background: "back-to-normal.jpg",
		choices: [
			{ id: "reconsider_later", text: "Reconsider your decision a week later", next: "reconsider_guardian" },
			{ id: "move_on", text: "Try to move on with your life", next: "move_on_ending" },
			{ id: "research_secretly", text: "Research the library's history secretly", next: "secret_research" }
		],
		addToJournal: "I chose to leave the archive and return to my normal life. Ms. Blackwood let me go but said I could return if I changed my mind. Since then, I've been noticing strange details about the library I never saw before, and I can't stop thinking about what I discovered. The key remains with me, a constant reminder of the path not taken."
	},


	// Path 1.1.3.3: Ask for time
	"request_time": {
		text: `<p>"This is a lot to process," you tell Ms. Blackwood. "I need some time to think about everything I've seen tonight."</p>
			<p>She smiles understandingly. "Of course. Such decisions should never be rushed. The archive has existed for centuries—it can wait a little longer."</p>
			<p>She reaches into her pocket and retrieves a small, ornate timepiece. "Take this. It's connected to the archive and will warm when you're ready to return. Simply hold it and think of this place."</p>
			<p>You accept the timepiece, feeling its subtle vibration against your palm.</p>
			<p>"I only ask one thing," she continues. "Speak of this to no one. The library's deeper nature must remain hidden from those who aren't ready to understand."</p>
			<p>She escorts you back up the spiral staircase. Before you part ways in the restricted section, she places a gentle hand on your shoulder.</p>
			<p>"Listen to your intuition," she says. "It led you here for a reason. Whatever you decide, know that finding the key was no accident."</p>`,
		background: "receiving-timepiece.jpg",
		choices: [
			{ id: "return_three_days", text: "Return to the archive after three days", next: "return_accept_role" },
			{ id: "research_decision", text: "Research the library's history before deciding", next: "research_before_decision" },
			{ id: "confide_colleague", text: "Confide in a trusted colleague", next: "share_secret" }
		],
		addToInventory: ["ornate_timepiece"],
		addToJournal: "I asked Ms. Blackwood for time to consider her offer. She gave me an ornate timepiece that she says is connected to the archive and will help me return when I'm ready. She asked me not to tell anyone about what I've discovered. Now I need to decide my next step carefully."
	},


	// Path 1.2.2.1: Approach the glowing book
	"approach_book_with_light": {
	  text: `<p>Your flashlight beam cuts through the darkness as you cautiously approach the pedestal. The book's blue glow intensifies in response to your presence, casting eerie shadows across the ancient archive.</p>
			<p>As you draw closer, you notice the pages are filled with shifting text in an unfamiliar script—letters and symbols that seem to rearrange themselves continuously. The book is bound in what appears to be leather, but it has an unusual texture and sheen.</p>
			<p>Standing before the pedestal, you feel a subtle vibration in the air, like silent electricity. The brass key in your pocket grows warm.</p>
			<p>Your flashlight flickers momentarily, and in that brief darkness, you could swear the book's glow formed tendrils that reached toward you.</p>
			<p>When you examine the book more closely, you see that while the text is incomprehensible, the illustrations are remarkably detailed—showing libraries, doorways, and strange landscapes that seem to move slightly when viewed from the corner of your eye.</p>
			<p>At the bottom of the current page is a clear illustration of a brass key identical to yours, positioned above what appears to be a map of Ravencrest Library—with passages and rooms you've never seen before.</p>`,
	  background: "glowing-book-close.jpg",
	  choices: [
		{ id: "touch_book", text: "[1.2.2.1.1] Touch the glowing book", next: "accept_guardian_role" },	//	contact_ancient_tome
		{ id: "read_aloud", text: "[1.2.2.1.2] Try to read some text aloud", next: "accept_guardian_role" },	//	recite_unknown_text
		{ id: "sketch_map", text: "[1.2.2.1.3] Sketch the map shown in the book", next: "accept_guardian_role" }	//	copy_hidden_map
	  ],
	  addToInventory: ["flashlight", "book_observation"],
	  addToJournal: "I approached the mysterious glowing book in the hidden archive. The text constantly shifts and changes, written in an unknown script, but the illustrations are remarkably detailed. I saw an illustration of my brass key positioned above what appears to be a hidden map of Ravencrest showing passages I never knew existed. The book seems to respond to my presence—the glow intensified as I approached, and my flashlight flickered momentarily."
	},


	// Path 1.2.2.2: Explore the archive shelves first
	"explore_archive_shelves": {
	  text: `<p>You decide to investigate the surrounding shelves before approaching the mysterious central book. Your flashlight beam reveals an astonishing collection—texts in languages both familiar and utterly foreign, bound in materials ranging from conventional leather to substances you cannot identify.</p>
			<p>One section contains scrolls sealed with wax emblems bearing astronomical symbols. Another holds books with metallic pages that reflect your flashlight with prismatic effects. Some volumes appear to be centuries old, while others seem impossibly well-preserved.</p>
			<p>What strikes you most is the organization—this is no haphazard storage room but a meticulously maintained archive. Categories are marked in multiple languages, including some that use symbols instead of letters.</p>
			<p>On one shelf, you discover a thin volume whose spine bears the Ravencrest family crest. Opening it reveals a journal written in elegant script, dated 1723. The first entry reads: "The nexus functions as intended. Three visitors arrived yesterday through the Eastern Passage. We have established proper protocols for their return."</p>
			<p>Further entries mention "stabilizing the boundaries," "recalibrating the anchor points," and "cataloging artifacts from the Seventh Realm." The writer expresses concern about "thinning between worlds during the equinox."</p>
			<p>In the margin of one page is a carefully drawn diagram of what appears to be the brass key you found, labeled "Archivist's Key – Secondary Access."</p>`,
	  background: "archive-shelves.jpg",
	  choices: [
		{ id: "take_journal", text: "[1.2.2.2.1] Take the Ravencrest journal", next: "acquire_journal" },
		{ id: "follow_catalog", text: "[1.2.2.2.2] Look for the 'Eastern Passage' mentioned in the journal", next: "search_eastern_passage" },
		{ id: "approach_central_book", text: "[1.2.2.2.3] Now approach the glowing book in the center", next: "approach_book_with_light" }
	  ],
	  addToInventory: ["flashlight", "ravencrest_journal_notes"],
	  addToJournal: "I explored the archive shelves before approaching the central book. The collection is incredible—texts in countless languages, some bound in materials I can't identify. I found a journal from 1723 with the Ravencrest family crest that mentions 'visitors' arriving through an 'Eastern Passage,' 'thinning between worlds,' and 'the Seventh Realm.' My brass key was illustrated in the margin, labeled 'Archivist's Key – Secondary Access.' This archive seems to be connected to other realms or dimensions somehow."
	},


	// Path 1.2.2.3: Carefully examine the chamber for other exits
	"examine_archive_chamber": {
	  text: `<p>You decide to examine the chamber thoroughly before approaching the central book. Sweeping your flashlight across the circular room, you note that the stone walls are lined with bookshelves except for four equidistant archways—north, east, south, and west.</p>
			<p>The south archway is where you entered from the spiral staircase. The other three are sealed with different doors, each bearing unique symbols.</p>
			<p>The eastern door is made of dark wood with silver inlays forming a pattern of interconnected stars. The northern door appears to be metal with a circular mechanism instead of a conventional lock. The western door is the most unusual—it seems to be made of glass or crystal, with light refracting through it in impossible patterns.</p>
			<p>Near the northern door, you discover a pedestal with an open ledger. The pages contain entries in different handwritings, all dated. The most recent entry was made only three days ago: "Returned from Consultation with the Oxford Nexus. Boundary stability at 84%. Next thinning predicted in 17 days. Additional Guardians may be required."</p>
			<p>The ceiling of the chamber draws your attention next—it's a dome painted with an intricate mural depicting a library that extends infinitely in all directions. At certain points, the library in the mural transitions into different landscapes—mountains, oceans, and cityscapes unlike any you've seen before.</p>
			<p>In the center of the dome, directly above the glowing book, is a circular opening revealing what appears to be a night sky with unfamiliar constellations, despite the fact that you're underground.</p>`,
	  background: "archive-chamber.jpg",
	  choices: [
		{ id: "inspect_eastern_door", text: "[1.2.2.3.1] Inspect the eastern door with star patterns", next: "examine_star_door" },
		{ id: "check_visitor_ledger", text: "[1.2.2.3.2] Study the visitor ledger more closely", next: "study_ledger" },
		{ id: "approach_glowing_book", text: "[1.2.2.3.3] Approach the glowing book in the center", next: "approach_book_with_light" }
	  ],
	  addToInventory: ["flashlight", "chamber_observations"],
	  addToJournal: "I examined the archive chamber thoroughly. It's circular with four archways—the south one where I entered, and three sealed doors to the east, north, and west. Each door is unique: the eastern has silver star inlays, the northern has a circular mechanism, and the western appears to be made of crystal. I found a visitor ledger mentioning the 'Oxford Nexus' and 'boundary stability.' Most incredibly, the domed ceiling displays a mural of an infinite library that transitions into various landscapes, with an opening at the center revealing what looks like a night sky with unfamiliar stars—despite being underground."
	},


	// Path 1.2.3.1: Admit what you found and ask for explanations
	"admit_to_blackwood": {
	  text: `<p>"Ms. Blackwood," you say, stepping out from the supply closet, flashlight in hand. "I found something unusual—a hidden door in the restricted section, opened by this brass key I discovered in an old manuscript."</p>
			<p>Her expression shifts from surprise to something more complex—relief mixed with concern. "I thought it might be you," she says after a moment. "I felt the change in the library's resonance an hour ago."</p>
			<p>She approaches, her posture relaxing. "How much have you seen beyond the door?"</p>
			<p>When you explain that you've only glimpsed the staircase but haven't descended it, she nods thoughtfully.</p>
			<p>"The brass key you found is called the Archivist's Key," she explains. "It's one of seven original keys created by Elias Ravencrest, the founder of this library. Each opens a different section of what we call the True Library."</p>
			<p>She gestures toward the restricted section. "What looks like a simple university library above is actually just the surface level. Ravencrest is a nexus point—a place where the boundaries between realities are naturally thin. The True Library exists to monitor and maintain these boundaries, and to preserve knowledge from... various sources."</p>
			<p>"I am the current Head Archivist," she continues. "And I've been watching you since you started working here. The library chooses its own guardians, and it appears to have chosen you. The key revealing itself to you is proof enough."</p>`,
	  background: "blackwood-revelation.jpg",
	  choices: [
		{ id: "ask_for_more", text: "[1.2.3.1.1] Ask more about the True Library and nexus points", next: "true_library_explanation" },
		{ id: "offer_key", text: "[1.2.3.1.2] Offer to return the key", next: "return_key_offer" },
		{ id: "suggest_exploration", text: "[1.2.3.1.3] Suggest exploring the hidden staircase together", next: "explore_with_blackwood" }
	  ],
	  addToInventory: ["flashlight", "nexus_knowledge"],
	  addToJournal: "I admitted to Ms. Blackwood about finding the hidden door and brass key. She called it the 'Archivist's Key'—one of seven created by Elias Ravencrest. She explained that Ravencrest Library is actually a 'nexus point' where boundaries between realities are thin, and beneath it lies the 'True Library' that monitors these boundaries. Ms. Blackwood revealed herself as the current Head Archivist and suggested that the library has 'chosen' me as a guardian, with the key revealing itself to me as proof."
	},


	// Path 1.2.3.2: Deny finding anything unusual
	"deny_to_blackwood": {
	  text: `<p>You quickly tuck the flashlight behind your back and step out from the supply closet with what you hope is a casual demeanor.</p>
			<p>"Good evening, Ms. Blackwood," you say, feigning surprise. "I was just looking for some cleaning supplies for a spill in the reference section."</p>
			<p>She studies you with a penetrating gaze that makes you feel transparent. After an uncomfortable moment, she speaks.</p>
			<p>"The library has many ways of communicating its needs," she says cryptically. "And it rarely makes mistakes in choosing its confidants."</p>
			<p>She walks past you toward the restricted section, then pauses and turns back.</p>
			<p>"The brass key you found in the manuscript—" she says, making your heart skip a beat, "—it's called the Archivist's Key. It hasn't been seen since 1947. The fact that it revealed itself to you is significant."</p>
			<p>Your attempt at denial crumbles as she continues. "Something is changing in the deeper architecture of this place. I can feel it. And now, apparently, so can you." She gestures toward the restricted section. "I was on my way to investigate the door it opens. You're welcome to join me... unless you prefer to maintain this pretense?"</p>
			<p>Her tone carries no judgment, but her eyes reflect both amusement and genuine interest in your response.</p>`,
	  background: "confrontation-hallway.jpg",
	  choices: [
		{ id: "admit_after_denial", text: "[1.2.3.2.1] Admit everything and apologize for lying", next: "confess_to_blackwood" },
		{ id: "maintain_denial", text: "[1.2.3.2.2] Continue denying despite her knowledge", next: "stubborn_denial" },
		{ id: "join_cautiously", text: "[1.2.3.2.3] Cautiously agree to accompany her", next: "cautious_accompaniment" }
	  ],
	  addToInventory: ["flashlight"],
	  addToJournal: "I tried to deny finding anything unusual when confronted by Ms. Blackwood, but she knew about the brass key—calling it the 'Archivist's Key' that hasn't been seen since 1947. She knew exactly where I found it and said its appearance is 'significant.' She mentioned 'something changing in the deeper architecture' of the library and invited me to join her in investigating the door. She seems to believe the library itself chose to reveal its secrets to me."
	},


	// Path 1.2.3.3: Suggest exploring the door together
	"explore_with_blackwood": {
	  text: `<p>"Ms. Blackwood," you call out, stepping from the supply closet with your flashlight. "I found something interesting in the restricted section—a hidden door that this brass key opens." You hold up the key. "I was just getting better light to explore it. Would you like to join me?"</p>
			<p>She turns, a smile of approval warming her features. "I was hoping you might say that. I sensed a change in the library's resonance about an hour ago. That's why I came in so late."</p>
			<p>As you walk together toward the restricted section, she explains, "That key you found is called the Archivist's Key. It's one of the original seven created by Elias Ravencrest himself. We thought it was lost decades ago."</p>
			<p>"What does it open exactly?" you ask as you approach the hidden door.</p>
			<p>"One of the entrances to what we call the True Library," she replies. "The public collection is just the surface. Beneath it lies the real purpose of Ravencrest—a repository and monitoring station for a nexus point."</p>
			<p>At your questioning look, she elaborates, "A nexus is a location where the boundaries between realities are naturally thin. Ravencrest Library was intentionally built on such a point to study and maintain these boundaries."</p>
			<p>You reach the door, which remains ajar as you left it. Ms. Blackwood takes a silver key from around her neck—similar to your brass one but more ornate.</p>
			<p>"As Head Archivist, I would be honored if you would join me in exploring what the library has chosen to reveal to you," she says formally. "Few are selected by the library itself."</p>`,
	  background: "blackwood-doorway.jpg",
	  choices: [
		{ id: "accept_invitation", text: "[1.2.3.3.1] Accept her invitation and descend together", next: "descend_with_blackwood" },
		{ id: "ask_about_selection", text: "[1.2.3.3.2] Ask why the library might have 'selected' you", next: "chosen_one_explanation" },
		{ id: "request_preparation", text: "[1.2.3.3.3] Request time to prepare before descending", next: "preparation_request" }
	  ],
	  addToInventory: ["flashlight", "archivist_knowledge"],
	  addToJournal: "I suggested exploring the hidden door with Ms. Blackwood. She explained that my brass key is the 'Archivist's Key'—one of seven original keys created by Elias Ravencrest that was thought to be lost decades ago. She revealed that beneath the public library lies the 'True Library,' which monitors what she called a 'nexus point'—a location where 'boundaries between realities are naturally thin.' Ms. Blackwood identified herself as the Head Archivist and formally invited me to join her in exploring what the library has 'chosen to reveal' to me."
	},


	// Path 1.3.2.1: Accept Ms. Blackwood's guidance
	"guided_by_blackwood": {
	  text: `<p>"I'd like to know more about what's happening," you say, holding up the brass key. "And I trust you can guide me through this."</p>
			<p>Ms. Blackwood nods approvingly. "A wise choice. The path ahead requires both courage and prudence."</p>
			<p>She leads you back to the restricted section, explaining as you walk. "Ravencrest Library serves as a nexus point between realities. The brass key you found—the Archivist's Key—opens one of several paths to what we call the True Library beneath us."</p>
			<p>At the door, she pauses. "As Head Archivist, I maintain the boundaries between worlds and catalog knowledge from various realms. The library has been unusually active lately—dreams leaking into reality, books appearing and disappearing, whispering in empty rooms. Something is causing the boundaries to weaken."</p>
			<p>She unlocks the door with her own silver key, which complements your brass one. "The library chooses its own guardians," she continues. "It revealed the key to you for a reason. Your perception and intuition make you capable of seeing beyond the veil."</p>
			<p>The door swings open to reveal the spiral staircase descending into darkness. Ms. Blackwood produces a lantern that emits a warm, steady light.</p>
			<p>"The True Library contains knowledge from countless realities," she says. "Some of it wondrous, some dangerous. If you choose to continue, you may be offered a place among the Archivists who protect this knowledge and maintain the boundaries between worlds. Do you still wish to proceed?"</p>`,
	  background: "blackwood-lantern.jpg",
	  choices: [
		{ id: "descend_with_blackwood", text: "[1.3.2.1.1] Descend the stairs with Ms. Blackwood", next: "descend_with_blackwood" },
		{ id: "ask_about_dangers", text: "[1.3.2.1.2] Ask about specific dangers you might face", next: "discuss_nexus_dangers" },
		{ id: "request_more_time", text: "[1.3.2.1.3] Request more time to consider your decision", next: "request_time_blackwood" }
	  ],
	  addToInventory: ["brass_key", "archivist_knowledge"],
	  addToJournal: "I accepted Ms. Blackwood's guidance and learned that Ravencrest Library is a nexus point between realities. She explained that as Head Archivist, she maintains boundaries between worlds and catalogs knowledge from various realms. The library has been 'unusually active' lately with weakening boundaries. She believes the library chose me as a guardian by revealing the Archivist's Key to me. Beyond the door lies the 'True Library' containing knowledge from countless realities, and I may be offered a place among the Archivists who protect this knowledge."
	},


	// Path 1.3.2.2: Request a full explanation before proceeding
	"blackwood_explanation": {
	  text: `<p>"Before I go anywhere," you say firmly, "I need to understand what's happening. What exactly is this key? What's beyond that door? And what did you mean when you said the library 'takes notice' of people?"</p>
			<p>Ms. Blackwood considers you for a moment, then gestures to a nearby reading nook. "Fair questions. You deserve answers."</p>
			<p>Once seated, she begins her explanation. "Ravencrest was founded in 1721 by Elias Ravencrest, who was not just a philanthropist but a member of a scholarly order called the Boundary Keepers. They identified locations where the fabric between realities is naturally thin—nexus points—and built libraries at these sites to study and maintain these boundaries."</p>
			<p>She continues, "The brass key you found is the Archivist's Key, one of seven original keys forged by Ravencrest himself. Each opens different sections of the True Library beneath us, which contains knowledge and artifacts from various realities."</p>
			<p>"As for the library taking notice," she says, lowering her voice, "Ravencrest is not merely a building. Through centuries of exposure to energies from multiple realities, it has developed a form of awareness. It selects potential guardians by revealing certain secrets to them—like hiding then revealing the key to you."</p>
			<p>She looks at you intently. "For several months, I've observed your curiosity, your attention to detail, your intuition. But it was the library that chose you, not I. The door you found leads to the Archives—the heart of the True Library where we monitor boundary stability and catalog interdimensional knowledge."</p>
			<p>"Tonight," she concludes, "the boundaries are thinner than usual. If you wish to understand your role in all this, now is the time to explore it."</p>`,
	  background: "library-reading-nook.jpg",
	  choices: [
		{ id: "accept_explanation", text: "[1.3.2.2.1] Accept her explanation and proceed to the door", next: "accept_guardian_role" },	//	proceed_to_archives
		{ id: "question_order", text: "[1.3.2.2.2] Ask more about the Boundary Keepers order", next: "accept_guardian_role" },	//	boundary_keepers_history
		{ id: "request_proof", text: "[1.3.2.2.3] Request proof of her claims", next: "accept_guardian_role" }	//	request_nexus_proof
	  ],
	  addToInventory: ["brass_key", "boundary_knowledge"],
	  addToJournal: "Ms. Blackwood explained that Ravencrest Library was founded in 1721 by Elias Ravencrest, a member of an order called the Boundary Keepers who built libraries at 'nexus points' where the fabric between realities is thin. My brass key is one of seven original 'Archivist's Keys' that open different sections of the 'True Library' beneath us. Most remarkably, she claims the library has developed a form of awareness over centuries of exposure to energies from multiple realities, and it 'selected' me by revealing the key. The door leads to the Archives where they monitor 'boundary stability.'"
	},


	// Path 1.3.2.3: Politely decline and leave
	"decline_archive_invitation": {
	  text: `<p>"I appreciate your offer, Ms. Blackwood," you say, trying to keep your voice steady, "but this is... a lot to process. I think I need some time to consider what you've told me. Perhaps it would be best if I returned the key and went home for now."</p>
			<p>You hold out the brass key, but Ms. Blackwood makes no move to take it.</p>
			<p>"The key revealed itself to you," she says gently. "It's not mine to take back. The library has extended an invitation that only you can accept or decline."</p>
			<p>She reaches into her pocket and produces a small leather-bound book. "If you wish to leave, I understand. But please take this with you. It contains basic information about Ravencrest's true nature and purpose. It may help you make sense of your experience."</p>
			<p>As you accept the book, she adds, "Know that the library rarely makes mistakes in choosing its confidants. The fact that you found the key suggests you possess qualities needed in a guardian of knowledge."</p>
			<p>With a respectful nod, she turns to leave. "Should you change your mind, the door will remain accessible to you through that key. But I should warn you—now that you've glimpsed beyond the veil, you may find ordinary life somewhat... changed. Knowledge, once gained, cannot be unlearned."</p>
			<p>As you watch her disappear into the shadows of the library, you feel the weight of the key in one hand and the book in the other, symbols of a choice that seems to hang in the balance.</p>`,
	  background: "contemplation-shadows.jpg",
	  choices: [
		{ id: "reconsider_leaving", text: "[1.3.2.3.1] Reconsider and call after Ms. Blackwood", next: "reconsider_blackwood" },
		{ id: "examine_book", text: "[1.3.2.3.2] Examine the book before deciding", next: "examine_primer_book" },
		{ id: "leave_library", text: "[1.3.2.3.3] Leave the library with both items", next: "depart_with_artifacts" }
	  ],
	  addToInventory: ["brass_key", "primer_book"],
	  addToJournal: "I declined Ms. Blackwood's invitation to explore the hidden door. When I tried to return the key, she said it wasn't hers to take back—'The library has extended an invitation that only you can accept or decline.' She gave me a small book containing information about Ravencrest's 'true nature and purpose' and warned that 'now that you've glimpsed beyond the veil, you may find ordinary life somewhat changed.' I'm left with both the key and the book, unsure what to do next."
	},


	// Path 1.3.3.1: Take the book and read it
	"read_blackwood_book": {
	  text: `<p>Curiosity overcomes caution as you reach for the leather-bound book. "Alright," you say. "I'll read it."</p>
			<p>The book's cover is unmarked, but the leather feels unusually warm to the touch. As you open it, the pages begin to glow faintly, illuminating text that seems to shift slightly as you read.</p>
			<p>"The Archivist's Primer," the title page reads. "A Guide to Ravencrest Nexus and the True Library."</p>
			<p>The first chapter explains that certain locations throughout the world serve as nexus points—places where the boundaries between realities naturally thin. Ravencrest Library was deliberately constructed at such a point to study and maintain these boundaries.</p>
			<p>According to the text, the "True Library" beneath Ravencrest catalogs knowledge from various realities and monitors "boundary integrity." It warns of "bleed-through" when boundaries weaken, allowing elements from other realities to enter our world—often manifesting as unusual phenomena or seemingly impossible occurrences.</p>
			<p>The most fascinating section describes the seven Archivist's Keys, each granting access to different sections of the True Library. The brass key you possess—the Third Key—opens the path to the Observation Archives, where reality fluctuations are monitored.</p>
			<p>As you finish reading, the text fades from the pages, replaced by a map showing the location of several hidden entrances throughout the library—including the one you discovered in the restricted section.</p>`,
	  background: "glowing-book-pages.jpg",
	  choices: [
		{ id: "ask_more_questions", text: "[1.3.3.1.1] Ask Ms. Blackwood more questions about the Primer", next: "primer_questions" },
		{ id: "declare_readiness", text: "[1.3.3.1.2] Tell her you're ready to see the True Library", next: "ready_for_archives" },
		{ id: "request_time", text: "[1.3.3.1.3] Request time to process the information", next: "processing_time" }
	  ],
	  addToInventory: ["brass_key", "archivists_primer"],
	  addToJournal: "I read 'The Archivist's Primer' Ms. Blackwood gave me. The pages glowed as I read, and the text seemed to shift. It explained that Ravencrest was built on a 'nexus point' where boundaries between realities thin. The 'True Library' beneath catalogs knowledge from various realities and monitors 'boundary integrity.' My brass key is the 'Third Key' of seven, opening the path to the 'Observation Archives.' After reading, the text transformed into a map showing hidden entrances throughout the library, including the one I found."
	},


	// Path 1.3.3.2: Return the key and ask for an explanation
	"surrender_key": {
	  text: `<p>You hold out the brass key to Ms. Blackwood. "I think this belongs to the library," you say. "But before I give it back, could you please explain what's happening? What's so special about this key, and why does the library feel... different tonight?"</p>
			<p>Ms. Blackwood smiles but doesn't take the key. "The key revealed itself to you, which means it's yours to use or refuse. I cannot take it from you."</p>
			<p>She gestures to a nearby table, inviting you to sit. "What you've found is the Archivist's Key—one of seven created by Elias Ravencrest when he founded this library in 1721. Each key opens a different section of what we call the True Library."</p>
			<p>"Ravencrest isn't just a repository of books," she continues. "It's built on a nexus point where the boundaries between realities are naturally thin. The True Library monitors these boundaries and preserves knowledge from various realms."</p>
			<p>She looks at you with new intensity. "Tonight, the boundaries are particularly thin—a cyclical occurrence that happens roughly every seventy years. The library becomes more... alive during these periods. More likely to reveal its secrets to those it deems worthy."</p>
			<p>"As for why you," she concludes, "the library has its own ways of judging character. It must have sensed in you the qualities needed in a guardian of knowledge—curiosity balanced with caution, intelligence with integrity."</p>
			<p>She stands. "The choice is yours. You may keep the key but never use it, return to your ordinary life, and eventually convince yourself this was all imagination. Or you may use it to access the True Library and perhaps join the lineage of Archivists who have protected this nexus for centuries."</p>`,
	  background: "blackwood-conversation.jpg",
	  choices: [
		{ id: "keep_key_use", text: "[1.3.3.2.1] Keep the key and use it to access the True Library", next: "use_key_immediately" },
		{ id: "keep_key_wait", text: "[1.3.3.2.2] Keep the key but wait until you're more prepared", next: "delay_key_use" },
		{ id: "insist_return", text: "[1.3.3.2.3] Insist on returning the key and walking away", next: "forceful_return" }
	  ],
	  addToInventory: ["brass_key", "nexus_knowledge"],
	  addToJournal: "I tried to return the key to Ms. Blackwood, but she said it had 'revealed itself' to me and wasn't hers to take. She explained it's one of seven 'Archivist's Keys' created by Elias Ravencrest in 1721. The library is built on a 'nexus point' where boundaries between realities thin, and tonight the boundaries are particularly thin—a cyclical event that happens every seventy years. The library apparently sensed qualities in me needed in a 'guardian of knowledge.' She offered me a choice: keep the key but never use it, or access the 'True Library' and potentially join the lineage of Archivists."
	},


	// Path 1.3.3.3: Leave without taking the book
	"flee_library": {
		text: `<p>"I'm sorry," you say, backing away slowly. "This is too much. I need to leave."</p>         
			<p>You turn and hurry toward the exit, hearing Ms. Blackwood call after you: "The key 	will find you again. The library has already chosen."</p>         
			<p>Outside, the night air feels unusually cold. The campus is deserted, streetlamps casting long shadows across the quad. You walk briskly toward your apartment, trying to process everything you've learned.</p>         
			<p>Halfway home, you instinctively check your pocket—and freeze. The brass key is there, despite having left it behind on Ms. Blackwood's desk. A chill runs through you that has nothing to do with the night air.</p>         
			<p>At your apartment, exhaustion overcomes confusion, and you collapse into bed. Your dreams are vivid and strange—endless corridors of books, doorways opening to impossible landscapes, and whispering voices that seem to know your name.</p>         
			<p>You wake with a start at dawn, sunlight streaming through your window. For a moment, you wonder if last night's events were just a nightmare—until you feel something hard beneath your pillow.</p>         
			<p>The brass key gleams in the morning light, and beside it lies the small leather book Ms. Blackwood had offered you. A bookmark protrudes from its pages, and when you open it, the text seems to shift before settling into clarity: "Chapter One: The Chosen Librarians."</p>         
			<p>Your phone buzzes with a text message from an unknown number: "The library opens at dusk for those who hold the key. We await your return."</p>`,
		background: "apartment-morning.jpg",
		choices: [
			{ id: "read_found_book", text: "[1.3.3.3.1] Read the mysterious book", next: "morning_reading" },
			{ id: "return_to_library", text: "[1.3.3.3.2] Return to the library immediately", next: "daytime_library_visit" },
			{ id: "seek_answers", text: "[1.3.3.3.3] Research the library's history online", next: "library_research" }
		],
		addToInventory: ["leather_book"],
		addToJournal: "I tried to flee from the library and whatever strange things were happening, but Ms. Blackwood warned me that 'the key will find you again.' She was right—the key appeared in my pocket on the way home, and I had vivid dreams all night. When I woke up, both the key and the mysterious book she had offered me were under my pillow. I also received an ominous text message saying 'the library opens at dusk for those who hold the key.' I'm beginning to think there's no escaping this situation."
	},
	
	
		
	// Path 1.1.2.1.1: Ask why you were chosen
	"why_chosen": {
	  text: `<p>"Why me?" you ask, genuinely puzzled. "I'm just a night librarian with a literature degree. There must be more qualified candidates."</p>
		  <p>Ms. Blackwood smiles with understanding. "Guardians aren't chosen for their academic credentials or experience. They're chosen for their inherent qualities—curiosity balanced with respect, openness to possibility without recklessness, and most importantly, a natural affinity for knowledge and the spaces between realities."</p>
		  <p>"The selection process isn't a conscious decision on my part," she continues. "The library itself—or perhaps the nexus point it occupies—resonates with certain individuals. You've likely felt it since you first arrived here."</p>
		  <p>She studies your face. "Those odd moments when books seem to find you rather than the other way around? The strange dreams of endless shelves and doors? The feeling that the library is somehow more alive at night when you're alone here? These aren't coincidences."</p>
		  <p>"The brass key revealing itself to you was merely the culmination of a connection that's been building for months. The library has been testing you, observing how you handle knowledge, how you treat the books in your care."</p>
		  <p>She leans forward slightly. "Not everyone can see the key for what it is, even when it's right in front of them. And among those who can see it, not everyone can use it. The fact that it worked for you is significant."</p>
		  <p>"The question now," she says, her voice gentle but serious, "is whether you're willing to accept this responsibility, or if you wish to walk away. Both choices are valid, but once made, they set you on very different paths."</p>`,
	  background: "guardian-selection.jpg",
	  choices: [
		{ id: "accept_responsibility", text: "[1.1.2.1.1.1] Accept the responsibility", next: "begin_guardian_training" },
		{ id: "ask_time_consider", text: "[1.1.2.1.1.2] Ask for time to consider", next: "time_to_consider" },
		{ id: "decline_politely", text: "[1.1.2.1.1.3] Decline the role politely", next: "decline_guardian_role" }
	  ],
	  addToJournal: "Ms. Blackwood explained that I was chosen because I possess qualities the library resonates with—curiosity, respect for knowledge, and a natural affinity for the spaces between realities. Apparently, I've been unconsciously tested for months, with the brass key being the final test. Now I must decide whether to accept this responsibility or walk away."
	},


	// Path 1.1.2.1.2: Request proof of other realities
	"reality_demonstration": {
	  text: `<p>"This is a lot to accept on faith," you say. "Can you show me proof that other realities actually exist?"</p>
		  <p>Ms. Blackwood considers your request, then nods. "A reasonable skepticism. Follow me."</p>
		  <p>She leads you to a section of the archive where several pedestals hold what appear to be ordinary objects: a pocket watch, a leather-bound book, a compass, and a fountain pen.</p>
		  <p>"These are artifacts from different realities," she explains. "Each carries the distinct energy signature of its original world."</p>
		  <p>She picks up the watch and offers it to you. "This is from a world where time flows inconsistently—sometimes faster, sometimes slower than our own. A horologist there created instruments to measure and capture these fluctuations."</p>
		  <p>As you hold it, you notice that the second hand moves erratically—sometimes racing around the dial, sometimes barely crawling—yet the time it displays remains accurate.</p>
		  <p>"Now the book," she continues, taking the leather volume. "From a world where written words can temporarily manifest when read aloud under specific conditions."</p>
		  <p>She opens to a marked page and reads: "The reader shall feel a gentle breeze upon their face, carrying the scent of jasmine."</p>
		  <p>Immediately, a soft wind brushes against your skin, bringing with it the unmistakable sweet fragrance of jasmine flowers, despite being underground.</p>
		  <p>She places the book down and picks up the compass. "From a world where cardinal directions include not just physical space but temporal dimensions. Note how it has six points instead of four."</p>
		  <p>The compass needle shifts constantly between the points labeled N, S, E, W, F, and P—the last two, she explains, standing for "Future" and "Past."</p>
		  <p>"And finally," she says, offering you the fountain pen, "from a world where colors we cannot perceive exist. Write something."</p>
		  <p>When you do, the ink shifts through normal colors but also seems to contain hues that your eyes can't quite process—colors that should be impossible but somehow exist on the page.</p>`,
	  background: "reality-artifacts.jpg",
	  choices: [
		{ id: "convinced_by_proof", text: "[1.1.1.2.2.1] Express that you're convinced", next: "accept_after_proof" },
		{ id: "scientific_inquiry", text: "[1.1.1.2.2.2] Ask for scientific explanations", next: "scientific_discussion" },
		{ id: "explore_artifacts", text: "[1.1.1.2.2.3] Ask to explore more artifacts", next: "artifact_exploration" }
	  ],
	  addToInventory: ["reality_compass"],
	  addToJournal: "Ms. Blackwood showed me artifacts from different realities: a watch with an erratic second hand, a book that created a jasmine-scented breeze when read aloud, a six-pointed compass that includes temporal directions, and a pen that writes in impossible colors. These demonstrations make it difficult to maintain my skepticism about multiple realities."
	},
	
	
	// Path 1.1.3.1.1: [Sorted with 'begin_guardian_training']; so no 1.1.3.1.2, 1.1.3.1.3, etc
	
	
	// Path 1.1.3.2.1: [Sorted with 'leave_archive']; so no 1.1.3.2.2, 1.1.3.2.3, etc
	
	
	// Path 1.1.3.3.1: Return to the archive after three days
	"return_accept_role": {
		text: `************`,
		background: "**************",
		choices: [
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" }
		],
		addToInventory: ["**************"],
		addToJournal: "**************"
	},
	
	
	// Path 1.1.3.3.2: Research the library's history before deciding
	"research_before_decision": {
		text: `************`,
		background: "**************",
		choices: [
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" }
		],
		addToInventory: ["**************"],
		addToJournal: "**************"
	},
	
	
	// Path 1.1.3.3.3: Confide in a trusted colleague
	"share_secret": {
		text: `************`,
		background: "**************",
		choices: [
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" },
			{ id: "**************", text: "**************", next: "**************" }
		],
		addToInventory: ["**************"],
		addToJournal: "**************"
	},
	
	

	// Path - Join Secret Council (Ending Path)
	"join_secret_council": {
		text: `<p>Taking a deep breath, you descend the staircase into the mysterious chamber below. The blue glow intensifies as you reach the bottom, emanating from a massive book on a central pedestal—similar to what you glimpsed earlier.</p>
			<p>The circular room is lined with bookshelves containing volumes unlike any you've seen before—some bound in materials you can't identify, others seeming to shift and change as you look at them. Around the central pedestal stand five people, including Ms. Blackwood.</p>
			<p>"Welcome to the Council of Guardians," she says. "We've been expecting you, though perhaps not quite so soon."</p>
			<p>The others introduce themselves—librarians and scholars from around the world, each responsible for protecting and maintaining a nexus point similar to Ravencrest.</p>
			<p>"What you've discovered," explains an elderly man with an Oxford accent, "is that certain libraries serve as intersections between realities. The books they contain aren't merely about different worlds—many come from those worlds."</p>
			<p>"The barriers between these worlds thin cyclically," adds a younger woman in wire-rimmed glasses. "We're approaching such a thinning now. During these periods, passage between realities becomes easier, but so does... contamination."</p>
			<p>Ms. Blackwood places a hand on your shoulder. "The library chose you by revealing the key. We need new Guardians for the coming transition. Will you join us in protecting the boundaries of knowledge?"</p>
			<p>Over the following months, you train with the Council, learning to navigate between worlds through literary gateways, to recognize visitors from other realities, and to protect the delicate balance between realms of possibility.</p>
			<p>Six months later, in a formal ceremony beneath Ravencrest, you are inducted as a full Guardian, entrusted with your own nexus to protect—a small but significant library in your hometown that, you now realize, always felt somehow magical to you as a child.</p>
			<p class="ending">THE END - Guardian of the Hometown Nexus</p>`,
		background: "guardian-council.jpg",
		ending: "council",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "I joined the Council of Guardians beneath Ravencrest Library. They explained that certain libraries serve as nexus points between different realities, and that we're approaching a 'thinning' of the barriers between worlds. I've spent months training to become a Guardian—learning to navigate between worlds through books and protect the boundaries of knowledge. Today I was assigned my own nexus to protect: the library in my hometown that always felt magical to me as a child."
	},
	
	
	// Path - Apologetic Retreat
	"apologetic_retreat": {
		text: `<p>"I'm so sorry," you call down, your voice echoing in the stairwell. "I didn't mean to intrude. I was just... curious."</p>     
			<p>There's a moment of silence before Ms. Blackwood responds, her voice carrying an unexpected note of disappointment.</p>     
			<p>"Curiosity is what brought you this far," she says. "A shame you won't see where it leads."</p>     
			<p>You back away from the doorway, heart pounding. "I won't tell anyone about this place. I promise."</p>     
			<p>"No," says Ms. Blackwood, her footsteps now ascending the stairs. "You won't."</p>     
			<p>You retreat hastily through the restricted section, back to the main library. Your night shift passes in tense silence. When you return the next evening, there's a new supervisor—Ms. Blackwood has "taken a leave of absence." The door to the restricted section is locked, and your key no longer works.</p>     
			<p>Over the following weeks, you catch occasional glimpses of familiar faces from the library appearing in strange places—reflections in windows, between bookshelves, watching you from across the street. Your dreams fill with whispers and the soft blue glow you glimpsed beneath the library.</p>     
			<p>One month later, you receive an envelope containing your resignation letter—in your handwriting, though you never wrote it—and a note: "Some doors, once discovered, cannot be closed again. We'll be waiting when you're ready."</p>     
			<p>You try to forget the library and its secrets, but sometimes at night, you still hear those whispers calling your name.</p>`,
		background: "library-exterior-night.jpg",
		ending: "THE UNINITIATED: You glimpsed a world beyond your understanding but chose safety over revelation. The library's secrets remain just beyond your reach, waiting for the day you find the courage to return.",
		choices: [
			{ id: "restart", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
	],
		addToJournal: "I apologized for eavesdropping and retreated from Ms. Blackwood and whatever gathering was happening beneath the library. Though I promised not to tell anyone about what I saw, Ms. Blackwood seemed disappointed in my decision to leave. Shortly after, she disappeared on 'leave,' and I lost access to the restricted section. I've been experiencing strange occurrences since then—glimpses of library staff watching me and whispers in my dreams. I received my own resignation letter that I never wrote, along with an ominous note suggesting that I can't truly escape what I've discovered. The library's secrets remain, waiting for me to return."
	},
	
	
	// Path - Flee Discovery
	"flee_discovery": {
		text: `<p>Panic grips you. Without responding to Ms. Blackwood's invitation, you turn and sprint through the restricted section, knocking over a stack of ancient books in your haste.</p>		
			<p>"Wait!" Ms. Blackwood's voice calls after you, but fear drives you forward.</p>     
			<p>You burst through the library's main entrance into the cool night air, not stopping until you reach your apartment several blocks away. You call in sick the next day, and the day after that. On the third day, you formally resign via email.</p>     
			<p>Life seems to return to normal—until the dreams begin. Each night, you find yourself wandering endless library corridors that twist into impossible geometries. Blue light pulses beneath closed doors, and voices call your name from behind walls of ancient books.</p>     
			<p>One week after your flight from the library, you discover your brass key is missing. The next morning, you find it on your nightstand beside a small, leather-bound book that wasn't there before. Its pages are blank except for a single line on the first page: "The Archive acknowledges your selection. Denial will not change your path."</p>     
			<p>Strange incidents multiply. Your computer screen flickers with text in languages you don't recognize. Colleagues mention conversations with you that never happened. Twice, you wake to find yourself standing outside the library at dawn with no memory of having left your bed.</p>     
			<p>Finally, after a month of escalating phenomena, you return to the library after hours. The door is unlocked. Ms. Blackwood waits inside, unsurprised by your arrival.</p>     <p>"The library always reclaims its chosen," she says simply, holding out her hand. "Shall we begin again?"</p>`,
		background: "library-return-night.jpg",
		ending: "THE RELUCTANT KEEPER: You tried to escape your destiny, but some callings cannot be outrun. The library's magic pursued you until you had no choice but to accept your role in its ancient purpose.",
		choices: [
			{ id: "restart", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
	],
		addToJournal: "I panicked and fled from the library after being discovered by Ms. Blackwood. I quit my job immediately afterward, hoping to escape whatever strange events were unfolding. But running away solved nothing—I began having vivid dreams about the library, and inexplicable things started happening. My key disappeared and reappeared alongside a mysterious book with a cryptic message about being 'selected.' After a month of increasingly bizarre occurrences, including waking up outside the library with no memory of going there, I finally returned. Ms. Blackwood was waiting for me, saying 'the library always reclaims its chosen.' I realize now that whatever connection I have to this place, it cannot be severed by simply running away."
	},


	// Credits page
	"credits": {
		text: `<p class="credits-title">THE LIBRARIAN'S SECRET</p>
			<p class="credits-subtitle">An Interactive Web Fiction Experience</p>
			
			<div class="credits-section">
				<p class="credits-header">Story & Game Design</p>
				<p>Your Name Here</p>
			</div>
			
			<div class="credits-section">
				<p class="credits-header">Development</p>
				<p>HTML/CSS: Your Name Here</p>
				<p>JavaScript: Your Name Here</p>
				<p>Game Engine: Your Name Here</p>
			</div>
			
			<div class="credits-section">
				<p class="credits-header">Special Thanks</p>
				<p>To all the libraries and librarians who guard knowledge</p>
				<p>To readers who find doorways between worlds in the pages of books</p>
				<p>And to you, for exploring this story</p>
			</div>
			
			<p class="credits-footer">© 2023 Your Name Here - All Rights Reserved</p>`,
		background: "credits-background.jpg",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "main_menu", text: "Main Menu", next: "main_menu" }
		  ]
		},
	
	
	



	// Path 1.1.2.1.1.1: Accept the responsibility & Path 1.1.1.2.1
	"begin_guardian_training": {
	  text: `<p>"I accept," you say, surprised by the certainty in your voice. "I don't fully understand everything yet, but I want to learn. This feels...right, somehow."</p>
		  <p>Ms. Blackwood's expression brightens. "I had hoped you would say that. The training won't be easy, but I believe you have the potential to become an exceptional Guardian."</p>
		  <p>She rises from her chair. "We should begin immediately. Your formal training will take months, but tonight I can show you the basics of how the nexus works."</p>
		  <p>She leads you to the glowing book at the center of the archive—the Codex. "This is our most important tool. It records all connections between our reality and others, and it helps us navigate the currents of knowledge flowing between worlds."</p>
		  <p>As you approach, the symbols on the pages rearrange themselves into words you can understand. Ms. Blackwood nods approvingly. "The Codex is responding to you already. That's an excellent sign."</p>
		  <p>Over the following weeks, you begin living a double life. By day, you're still the night librarian that patrons see, but during the quiet hours, Ms. Blackwood—who asks you to call her Eleanor now—trains you in the secret arts of maintaining the balance between worlds.</p>
		  <p>You learn to read the Codex's shifting text, to sense disturbances in the library's delicate ecosystem, and to use the key to access hidden sections that exist partially in other realities.</p>
		  <p>Three months later, in a private ceremony attended by Guardians from other nexus points around the world, you formally accept the title of Guardian-in-Training. As Eleanor places a pendant around your neck—a smaller version of the brass key that started your journey—you know with absolute certainty that you've found your true calling.</p>
		  <p class="ending">THE END - You have begun your journey as a Guardian-in-Training</p>`,
	  background: "guardian-training.jpg",
	  ending: "guardian_training",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I've accepted the role of Guardian and begun my training under Eleanor (Ms. Blackwood). The Codex—the glowing book at the center of the archive—responds to me, which Eleanor says is a good sign. I'm living a double life now: night librarian by day, Guardian-in-Training by night. Three months into my training, I participated in a ceremony with Guardians from other nexus points, receiving a pendant that marks my new path."
	},

	// Path 1.1.2.1.1.2: Ask for time to consider
	"time_to_consider": {
	  text: `<p>"This is a lot to take in," you say carefully. "I need some time to think about it."</p>
		  <p>Ms. Blackwood nods understandingly. "Of course. This isn't a decision to be made lightly. The role of Guardian will transform your life completely."</p>
		  <p>She reaches into her pocket and produces a small pendant—a miniature version of the brass key. "Take this. It will allow you to return to the archive when you've made your decision. Simply hold it near the door in the restricted section and think of this place."</p>
		  <p>As you accept the pendant, she adds, "Be aware that once you've seen beyond the veil, the knowledge stays with you. You may notice changes in how you perceive the library—patterns you didn't see before, connections between seemingly unrelated texts, even occasional glimpses of other realities bleeding through."</p>
		  <p>"How long do I have to decide?" you ask.</p>
		  <p>"The library has chosen you, but the final choice must be yours," she replies. "Take the time you need, but know that the boundaries continue to thin. I cannot maintain them indefinitely."</p>
		  <p>In the days that follow, you return to your regular duties, but everything feels different. Books sometimes seem to glow faintly with an inner light. You notice symbols hidden in the library's architecture that you've somehow never seen before. Occasionally, you catch glimpses of impossible things in your peripheral vision—shelves that shouldn't exist, patrons in strange attire who vanish when you look directly at them.</p>
		  <p>After two weeks of consideration, dreams, and increasingly strange experiences, you find yourself standing before the door in the restricted section, pendant in hand, having made your decision.</p>`,
	  background: "time-to-consider.jpg",
	  choices: [
		{ id: "return_accept", text: "[1.1.2.1.1.2.1] Return to the archive and accept the role", next: "delayed_acceptance" },
		{ id: "return_decline", text: "[1.1.2.1.1.2.2] Return to the archive and decline the role", next: "informed_decline" },
		{ id: "never_return", text: "[1.1.2.1.1.2.3] Decide never to return to the archive", next: "walk_away_forever" }
	  ],
	  addToInventory: ["pendant_key"],
	  addToJournal: "I asked Ms. Blackwood for time to consider the offer of becoming a Guardian. She gave me a pendant—a miniature version of the brass key—that will allow me to return to the archive when I've made my decision. Since then, I've been experiencing strange phenomena: books glowing, hidden symbols appearing, and glimpses of impossible things. After two weeks, I'm ready to make my decision."
	},

	// Path 1.1.2.1.1.2.1: Return and accept
	"delayed_acceptance": {
	  text: `<p>You hold the pendant near the lock, thinking of the archive below. The door clicks open softly, revealing the spiral staircase descending into darkness. Taking a deep breath, you step through.</p>
		  <p>Ms. Blackwood is waiting at the bottom, as if she knew you were coming. Perhaps she did.</p>
		  <p>"I accept the role," you tell her without preamble. "These past two weeks have shown me that I can't go back to seeing the world as I did before."</p>
		  <p>She smiles warmly. "The threshold experiences you've been having—they're quite normal for a potential Guardian who's become aware of the nexus. Your perception has begun to align with the true nature of reality."</p>
		  <p>"Will these... visions... get stronger?" you ask.</p>
		  <p>"With training, you'll learn to control them," she assures you. "You'll see across boundaries only when you choose to, rather than having realities bleed through unexpectedly."</p>
		  <p>She leads you deeper into the archive, to the glowing Codex. "We should begin immediately. First, you need to attune yourself to the Codex properly."</p>
		  <p>The following months transform your understanding of reality. Under Eleanor's guidance—she insists you use her first name now—you learn to navigate the currents between worlds, to sense disturbances in the boundaries, and to use the Codex to maintain balance.</p>
		  <p>You discover that your literature background serves you well; your familiarity with narrative structure helps you identify patterns in the flow of knowledge between realities.</p>
		  <p>Six months later, Eleanor presents you to the Council of Guardians—representatives from nexus points around the world. After a series of tests and questions, they formally recognize you as a Guardian-in-Training.</p>
		  <p>As you stand in the hidden archive, the Codex's blue light illuminating your face and your mentor smiling proudly beside you, you know that while your old life is behind you, an extraordinary one has just begun.</p>
		  <p class="ending">THE END - You have become a recognized Guardian-in-Training</p>`,
	  background: "acceptance-ceremony.jpg",
	  ending: "delayed_guardian",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "After two weeks of increasingly strange experiences, I returned to the archive and accepted the role of Guardian. Eleanor (Ms. Blackwood) explained that my 'threshold experiences' were normal for someone becoming aware of the nexus. I've spent months training to navigate between worlds and maintain the balance. The Council of Guardians has now formally recognized me as a Guardian-in-Training. My ordinary life is behind me, but an extraordinary one has begun."
	},

	// Path 1.1.2.1.1.2.2: Return and decline
	"informed_decline": {
	  text: `<p>You hold the pendant near the lock, thinking of the archive below. The door clicks open, and you descend the spiral staircase one last time.</p>
		  <p>Ms. Blackwood is arranging books on a shelf but turns as if she sensed your arrival. Her expression is neutral, but her eyes hold a question.</p>
		  <p>"I've come to return this," you say, holding out the pendant. "And to decline the position. I'm honored by the offer, but this isn't the path for me."</p>
		  <p>She accepts the pendant with a small nod. "I appreciate your honesty. The role of Guardian must be embraced willingly or not at all."</p>
		  <p>"What happens now?" you ask. "Will the... strange experiences I've been having continue?"</p>
		  <p>"They will fade gradually," she explains. "Though you may always retain some sensitivity to the boundaries between worlds. The library will begin searching for another candidate."</p>
		  <p>She regards you thoughtfully. "There is another possibility, if you're interested. Not everyone is suited to be a Guardian, but there are other roles in our network. Scholars who document cross-reality phenomena. Messengers who carry information between nexus points. Archivists who preserve knowledge from fading realities."</p>
		  <p>The offer surprises you. "You would still want me involved, even though I declined the Guardian role?"</p>
		  <p>"The library chose you for a reason," she says simply. "Perhaps not as its Guardian, but your connection to this place is undeniable. Think about it."</p>
		  <p>After consideration, you accept a position as a Junior Archivist, working part-time in the hidden archive. Your regular duties continue above, but now you also help catalog and preserve texts from other realities.</p>
		  <p>Over time, you develop expertise in identifying literary works that have crossed boundaries, noticing subtle differences that reveal their otherworldly origins. Your unique perspective proves valuable, and you find fulfillment in your dual role—serving both the public library and its secret heart.</p>
		  <p>When, two years later, a new Guardian is found, you help with their training, sharing insights from someone who walks between both worlds.</p>
		  <p class="ending">THE END - You have become an Archivist of Cross-Reality Literature</p>`,
	  background: "archivist-role.jpg",
	  ending: "archivist",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I returned to the archive but declined the Guardian role. Ms. Blackwood was understanding and offered me an alternative position within their network. I've become a Junior Archivist, cataloging and preserving texts from other realities while maintaining my regular library duties. I've developed expertise in identifying cross-reality literature, and when a new Guardian was found two years later, I helped with their training. I've found my place between both worlds."
	},

	// Path 1.1.2.1.1.2.3: Never return
	"walk_away_forever": {
	  text: `<p>You look at the pendant in your palm one last time before placing it in a small box and locking it in your desk drawer at home. Your decision is made—you will not return to the archive.</p>
		  <p>The responsibilities of a Guardian sound too overwhelming, too life-changing. You value your normal existence, your career plans, your relationships. Becoming keeper of the boundaries between worlds would mean sacrificing all of that.</p>
		  <p>In the weeks that follow, the strange phenomena gradually diminish. The whispering between shelves fades to silence. The symbols hidden in the library's architecture become harder to discern. The occasional glimpses of impossible things cease entirely.</p>
		  <p>You notice Ms. Blackwood watching you sometimes with a mixture of understanding and regret, but she never approaches you about the archive again.</p>
		  <p>Three months later, a new librarian joins the staff—a quiet, thoughtful woman named Sarah who works the day shift. You occasionally notice her in deep conversation with Ms. Blackwood in the restricted section.</p>
		  <p>One evening, you spot Sarah using a familiar brass key at the hidden door. Your eyes meet briefly across the room, and you exchange a look of recognition and understanding before you turn away.</p>
		  <p>Life continues on its ordinary path. You eventually accept a position as head librarian at a university across the country. Your experiences at Ravencrest fade into memory, becoming a strange chapter in your life that grows increasingly dreamlike with time.</p>
		  <p>Yet on certain nights, when you're alone among the stacks of your new library, you sometimes catch yourself listening for whispers between the shelves, or examining the spines of books more carefully than necessary, wondering if perhaps, just perhaps, some of them might contain stories from other worlds.</p>
		  <p>And sometimes, in your dreams, you return to the spiral staircase and the archive below, where the Codex still glows with its blue light, waiting for someone else to read its secrets.</p>
		  <p class="ending">THE END - You chose an ordinary life, but the memory remains</p>`,
	  background: "ordinary-life.jpg",
	  ending: "normal_life",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I decided not to return to the archive and locked away the pendant Ms. Blackwood gave me. Over time, the strange phenomena I experienced faded away. I noticed a new librarian, Sarah, who seemed to have taken my place as the potential Guardian. Eventually, I moved across the country to become a university head librarian. My experiences at Ravencrest have faded into memory, though sometimes I still find myself wondering about other worlds and the path I didn't take."
	},

	// Path 1.1.2.1.1.3: Decline the role politely
	"decline_guardian_role": {
	  text: `<p>"I'm honored by your confidence in me," you say carefully, "but I don't think I can accept this responsibility. It's too much."</p>
		  <p>Ms. Blackwood studies you for a moment, then nods slowly. "I understand. The role of Guardian is not for everyone, and it must be accepted willingly."</p>
		  <p>"What happens now?" you ask. "Do I just... forget all this?"</p>
		  <p>"That depends on you," she replies. "The knowledge you've gained cannot be unlearned, but your connection to the nexus will fade over time if you choose not to nurture it."</p>
		  <p>She reaches into her pocket and produces a small velvet pouch. "The brass key is yours to keep. Consider it a token of what might have been. If you ever change your mind, it will still work for you—though I cannot promise the opportunity will remain open indefinitely."</p>
		  <p>As you accept the pouch, she adds, "I would ask one favor: keep the existence of this place to yourself. The world isn't ready to know about the boundaries between realities."</p>
		  <p>You promise your discretion and make your way back up the spiral staircase for what you believe will be the last time.</p>
		  <p>In the following weeks, you continue your work as a night librarian, but the experience has changed you. You notice things others don't—subtle patterns in how books are organized, occasional irregularities in texts that suggest they might originate from slightly different realities.</p>
		  <p>One night, three months later, you're shelving books in the mythology section when you notice a volume that seems to glow faintly. Opening it reveals a detailed account of a pantheon you've never heard of, from a world where divine beings still walk among mortals.</p>
		  <p>You hesitate, then carefully place the book in your bag. Perhaps you aren't meant to be a Guardian, but you can still appreciate the windows into other worlds that occasionally appear. Over time, you amass a small private collection of these boundary-crossing texts, becoming an unofficial custodian of stories from elsewhere.</p>
		  <p class="ending">THE END - You became a Collector of Cross-Reality Literature</p>`,
	  background: "collector-ending.jpg",
	  ending: "collector",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToInventory: ["brass_key_pouch"],
	  addToJournal: "I declined Ms. Blackwood's offer to become a Guardian, explaining that I couldn't accept such a responsibility. She was understanding and gave me the brass key as a keepsake, saying the opportunity might remain open if I change my mind. Since then, I've continued my work but with new awareness. I've begun noticing books that seem to cross over from other realities and have started a private collection of these boundary-crossing texts."
	},

	// Path 1.1.2.1.2.1: Express that you're convinced
	"accept_after_proof": {
	  text: `<p>"I'm convinced," you say, still staring at the impossible colors drying on the page. "No technology I know of could create these effects."</p>
		  <p>Ms. Blackwood smiles, looking relieved. "Not technology from our reality, at least. Though in some worlds, what we would call magic is simply their version of science."</p>
		  <p>She carefully returns the artifacts to their pedestals. "Now that you accept the existence of the multiverse, we should discuss what it means to be a Guardian. The role isn't simply honorary—it carries significant responsibilities."</p>
		  <p>"As a Guardian, you would maintain the boundaries between realities, ensuring knowledge flows properly without allowing dangerous elements to cross over. You would learn to read the Codex"—she gestures to the glowing book at the center of the room—"and use it to navigate the connections between worlds."</p>
		  <p>"This sounds..." you search for the right word, "...overwhelming."</p>
		  <p>"It can be," she acknowledges. "But you wouldn't begin alone. I've served as Guardian for nearly fifty years, and I would train you thoroughly before you assume full responsibilities."</p>
		  <p>She explains that the training would take place during the night hours when the library is closed, allowing you to maintain your regular position while learning your new role.</p>
		  <p>"The choice must be yours," she concludes. "Will you accept training as my successor?"</p>
		  <p>After brief consideration, you nod. "Yes. After what I've seen, how could I walk away?"</p>
		  <p>The training begins that very night. Ms. Blackwood—Eleanor, as she asks you to call her—starts by teaching you the history of Ravencrest and the network of nexus points around the world.</p>
		  <p>Over the months that follow, you learn to sense disturbances in the boundaries between worlds, to use the brass key to access hidden chambers of the library that exist partially in other realities, and to interpret the shifting text of the Codex.</p>
		  <p>A year later, in a ceremony attended by Guardians from other nexus points, you are formally recognized as Guardian-Apparent of Ravencrest Library—second only to Eleanor herself, and prepared to assume full guardianship when her time comes.</p>
		  <p class="ending">THE END - You have become Guardian-Apparent of Ravencrest</p>`,
	  background: "guardian-apparent.jpg",
	  ending: "guardian_apparent",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "After seeing the artifacts from different realities, I was convinced about the multiverse and accepted training as Ms. Blackwood's successor. She revealed her first name is Eleanor, and she's been teaching me to maintain boundaries between worlds, use the brass key to access chambers in other realities, and read the Codex. After a year of training, I've been formally recognized as Guardian-Apparent of Ravencrest in a ceremony with Guardians from other nexus points worldwide."
	},

	// Path 1.1.2.1.2.2: Ask for scientific explanations
	"scientific_discussion": {
	  text: `<p>"These are fascinating demonstrations," you say, "but isn't there a scientific explanation? Perhaps advanced technology or some kind of hypnosis?"</p>
		  <p>Ms. Blackwood smiles patiently. "Your skepticism is healthy. The scientific method requires us to question and verify."</p>
		  <p>She gestures for you to follow her to a reading area where several large volumes are arranged on a table. "The boundaries between science and what some call 'magic' aren't as clear-cut as most believe. What I'm showing you isn't supernatural—it's entirely natural, just operating according to different universal constants."</p>
		  <p>She opens one of the books, revealing diagrams of what appears to be quantum physics, but with equations you've never seen before. "This text is from a reality where quantum mechanics developed along different lines. They discovered early on that consciousness directly affects wave function collapse in observable ways."</p>
		  <p>Another book contains botanical illustrations of plants that couldn't possibly exist in our world—with structures that defy the basic principles of terrestrial biology. "From a world where carbon isn't the foundation of organic life."</p>
		  <p>"The multiverse theory isn't just speculation," she continues. "Every reality branches from decision points, creating infinite variations. Most are nearly identical to ours with only minor differences, but others developed under completely different physical laws."</p>
		  <p>"Nexus points like Ravencrest exist where these realities brush against each other. The physics are complex, but essentially, certain locations have a natural thinness in the universal membrane."</p>
		  <p>She spends the next hour explaining theoretical physics that sounds both familiar and utterly foreign, drawing diagrams that make a strange kind of sense despite contradicting everything you learned in university science courses.</p>
		  <p>"Does this satisfy your scientific curiosity?" she asks finally.</p>
		  <p>You nod slowly, your perspective fundamentally altered. "I think so. This isn't magic—it's just science beyond our current understanding."</p>
		  <p>"Precisely," she agrees. "And as Guardian, part of your role would be to ensure that knowledge from other realities enters our world at an appropriate pace—when we're ready for it."</p>
		  <p>Over the months that follow, you divide your time between your regular duties and intensive study under Ms. Blackwood's guidance. Your scientific background proves valuable as you learn to navigate the complex interactions between different universal constants.</p>
		  <p>A year later, you publish your first paper in the secret Journal of Cross-Reality Physics—a publication shared only among Guardians and trusted scientists aware of the multiverse. Your unique approach to reconciling quantum mechanics across reality barriers earns recognition from peers you never knew existed.</p>
		  <p class="ending">THE END - You have become a Cross-Reality Theoretical Physicist</p>`,
	  background: "cross-reality-physics.jpg",
	  ending: "physicist",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "Ms. Blackwood offered scientific explanations for the multiverse, showing me texts with advanced physics and biology from different realities. She explained that nexus points like Ravencrest exist where realities intersect. I've spent the past year studying under her guidance and recently published my first paper in the Journal of Cross-Reality Physics. My scientific background has found its ultimate application in understanding and documenting the theoretical underpinnings of the multiverse."
	},

	// Path 1.1.2.1.2.3: Ask to explore more artifacts
	"artifact_exploration": {
	  text: `<p>"These artifacts are incredible," you say, still examining the pen that writes in impossible colors. "Are there more? Can I explore them?"</p>
		  <p>Ms. Blackwood's eyes light up at your enthusiasm. "Of course. The collection room is this way."</p>
		  <p>She leads you through a doorway you hadn't noticed before, into a vast chamber lined with glass cases. Each contains objects from different realities—some mundane in appearance, others utterly alien.</p>
		  <p>"This is the Artifact Repository," she explains. "Every Guardian contributes to it during their tenure. Some items are hundreds of years old, collected by the first Guardians of Ravencrest."</p>
		  <p>She guides you through the collection, explaining the origin and function of select pieces: a mirror that shows reflections from parallel versions of yourself, a music box that plays emotions instead of notes, a camera that captures moments that never happened but could have.</p>
		  <p>You pause before a display containing what looks like an ordinary book with a worn leather cover. "What's special about this one?"</p>
		  <p>"Ah," she says with particular fondness. "That's the first artifact I ever collected—a novel from a world where a certain famous author lived thirty years longer than in our reality. It contains her final works that were never written here."</p>
		  <p>As you explore, your initial skepticism dissolves completely. The sheer variety and consistency of the artifacts makes any explanation other than multiple realities seem absurd.</p>
		  <p>"Could I..." you hesitate, then continue, "could I help catalog these? My background in literature and library science seems applicable."</p>
		  <p>Ms. Blackwood looks pleased. "Are you offering to join us, then? Not necessarily as my successor, but perhaps as a Repository Curator?"</p>
		  <p>The idea appeals to you immediately—a chance to work with these fascinating objects without the full weight of Guardian responsibilities.</p>
		  <p>Over the following months, you split your time between regular library duties and secret work in the Repository. You develop a new classification system for literary artifacts that helps identify subtle variations in cross-reality texts.</p>
		  <p>Two years later, your expertise in cataloging and authenticating artifacts from literary realities is unmatched. When Guardians from other nexus points discover texts of uncertain origin, they send them to you for analysis.</p>
		  <p>Your life has found a perfect balance—ordinary librarian by day, expert in cross-reality artifacts by night. And though you never became a full Guardian, your specialized knowledge makes you an invaluable part of the multiverse network.</p>
		  <p class="ending">THE END - You have become the Curator of Cross-Reality Literary Artifacts</p>`,
	  background: "artifact-repository.jpg",
	  ending: "curator",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "Ms. Blackwood showed me the Artifact Repository, a vast collection of objects from different realities. Instead of becoming a Guardian, I offered to help catalog the artifacts, leveraging my background in literature and library science. Over the past two years, I've developed expertise in class."
	},
	
	// Path 1.1.2.3.1: Express disbelief
	"skepticism_response": {
		text: `<p>"This is... hard to believe," you say, shaking your head. "Multiple worlds? Guardians? It sounds like something from one of the fantasy novels upstairs."</p>
			  <p>Ms. Blackwood's expression remains patient. "I understand your skepticism. I felt the same way when I was first chosen." She gestures to the archive around you. "Yet here we are, in a place that shouldn't exist according to the blueprints of this building."</p>
			  <p>"May I show you something?" she asks, moving toward the glowing book at the center of the room. "This is the Codex—a record of all realities connected to Ravencrest. It appears differently to each person who views it, revealing what they're most prepared to understand."</p>
			  <p>She motions for you to approach. "See for yourself. The Codex doesn't reveal its contents to just anyone."</p>
			  <p>Hesitantly, you step forward and peer at the open pages. The symbols shift and transform before your eyes, arranging themselves into words you can understand. The text describes a version of Earth where the Industrial Revolution never happened, where society developed along entirely different technological lines.</p>
			  <p>As you continue reading, the words change again, showing you glimpses of other worlds—some similar to our own, others wildly different. The experience is both disorienting and fascinating.</p>
			  <p>"This is...incredible," you admit, looking up at Ms. Blackwood. "But how do I know this isn't some advanced technology? Or even a hallucination?"</p>`,
		background: "skeptic-at-codex.jpg",
		choices: [
			{ id: "request_proof", text: "[1.1.2.3.1.1] Request more tangible proof", next: "tangible_evidence" },
			{ id: "reluctant_interest", text: "[1.1.2.3.1.2] Express reluctant interest in learning more", next: "gradually_convinced" },
			{ id: "scientific_explanation", text: "[1.1.2.3.1.3] Ask for a scientific explanation", next: "science_of_realities" }
		],
		addToJournal: "I expressed my skepticism to Ms. Blackwood about multiple worlds and Guardians. She showed me the 'Codex,' a book whose text shifted before my eyes, displaying information about other versions of Earth and different realities. While fascinating, I'm still not entirely convinced this isn't some kind of elaborate trick or technology."
	},

	// Path 1.1.2.3.1.1: Request more tangible proof
	"tangible_evidence": {
		text: `<p>"I need something more concrete," you tell Ms. Blackwood. "Something that proves beyond doubt that what you're saying is true."</p>
			  <p>She considers your request thoughtfully. "Fair enough. Follow me."</p>
			  <p>She leads you to a section of the archive where several pedestals hold ordinary-looking objects: a pocket watch, a leather-bound journal, a small mirror, and a fountain pen.</p>
			  <p>"These are artifacts from different realities," she explains, picking up the pocket watch. "Each carries the distinct energy signature of its original world."</p>
			  <p>She hands you the watch. "This comes from a world where time flows differently—sometimes faster, sometimes slower than our own. It was crafted by a horologist who discovered how to capture that fluctuation."</p>
			  <p>As you hold it, the second hand moves erratically—sometimes racing, sometimes barely crawling, though the time it displays remains accurate.</p>
			  <p>"Now the journal," she continues, offering you the leather book. "From a world where written words temporarily become reality when read aloud under specific conditions."</p>
			  <p>She opens to a marked page and reads: "The reader shall feel a gentle breeze upon their face, carrying the scent of ocean air."</p>
			  <p>Immediately, a soft wind brushes against your skin, bringing with it the unmistakable salt tang of the sea, despite being underground.</p>
			  <p>Your mind races for explanations—hidden fans, scent dispensers—but Ms. Blackwood seems to read your thoughts.</p>
			  <p>"You're welcome to examine everything," she says. "Search for hidden mechanisms. Test and verify to your satisfaction."</p>`,
		background: "reality-artifacts.jpg",
		choices: [
			{ id: "examine_artifacts", text: "[1.1.2.3.1.1.1] Carefully examine the artifacts", next: "artifact_examination" },
			{ id: "test_journal", text: "[1.1.2.3.1.1.2] Test the journal yourself", next: "journal_test" },
			{ id: "finally_convinced", text: "[1.1.2.3.1.1.3] Admit you're beginning to believe", next: "beginning_belief" }
		],
		addToInventory: ["reality_watch"],
		addToJournal: "Ms. Blackwood showed me 'artifacts' from different realities—a watch with an erratic second hand and a journal that seemingly created a sea breeze when she read from it. I'm still searching for logical explanations, but these demonstrations are becoming increasingly difficult to dismiss."
	},

	// Path 1.1.2.3.1.1.1: Carefully examine the artifacts
	"artifact_examination": {
		text: `<p>Your skepticism drives you to carefully inspect each artifact, looking for any sign of trickery or technological deception.</p>
			  <p>You examine the pocket watch first, opening its case and studying the mechanism inside. The craftsmanship is unlike anything you've seen—gears made of an unfamiliar bluish metal, arranged in patterns that don't follow conventional watchmaking logic. Yet it works perfectly, though the second hand continues its erratic dance.</p>
			  <p>Next, you scrutinize the journal, flipping through pages filled with elegant script in what appears to be multiple languages, some of which you've never seen before. The paper itself has an unusual texture—slightly luminescent under certain angles of light.</p>
			  <p>The mirror reveals your reflection but occasionally shows glimpses of someone else—someone with your features but different clothing, different hairstyle. When you move suddenly, the "other you" sometimes moves with a slight delay.</p>
			  <p>Finally, you test the fountain pen by writing on a piece of paper Ms. Blackwood provides. The ink changes color as it dries, shifting through hues that don't match any ink you've encountered.</p>
			  <p>After nearly an hour of thorough investigation, you look up at Ms. Blackwood, who has patiently allowed your examination.</p>
			  <p>"I can't explain these," you admit. "They defy conventional physics and engineering."</p>
			  <p>She nods. "Because they originate from places where physical laws differ from our own. This is the tangible evidence you requested."</p>
			  <p>"What does all this have to do with me?" you ask, finally beginning to accept the extraordinary implications.</p>`,
		background: "examining-artifacts.jpg",
		choices: [
			{ id: "accept_real", text: "[1.1.2.3.1.1.1.1] Accept that the artifacts are real", next: "accept_reality" },
			{ id: "ask_guardian_role", text: "[1.1.2.3.1.1.1.2] Ask about the Guardian role", next: "guardian_duty_explanation" },
			{ id: "request_time", text: "[1.1.2.3.1.1.1.3] Request time to process everything", next: "processing_time" }
		],
		addToJournal: "I spent nearly an hour examining the artifacts Ms. Blackwood showed me. The watch contains unknown metals and impossible mechanics. The journal's paper has strange properties. The mirror sometimes shows a slightly different version of my reflection. The pen's ink shifts colors as it dries. I can find no evidence of trickery—these objects seem genuinely supernatural."
	},

	// Path 1.1.2.3.1.1.1.1: Accept that the artifacts are real
	"accept_reality": {
		text: `<p>"These artifacts are real," you say finally, setting down the mirror. "Which means everything else you've told me—about multiple realities, about this library being a nexus point—it's all true."</p>
			  <p>Ms. Blackwood smiles, relief evident in her expression. "Yes. The truth can be difficult to accept when it challenges our understanding of reality."</p>
			  <p>"But why me?" you ask. "Of all the people who work at Ravencrest, why did the library choose me?"</p>
			  <p>"The library recognizes certain qualities," she explains, guiding you back toward the central area with the glowing Codex. "An open mind. Intellectual curiosity. Respect for knowledge. Intuition. Adaptability. You possess all these in abundance."</p>
			  <p>She gestures to the brass key you found. "The key wouldn't have revealed itself to you otherwise. It's been waiting in that manuscript for decades, invisible to everyone who handled it until the right person came along."</p>
			  <p>"What happens now?" you ask.</p>
			  <p>"Now begins your training—if you choose to accept it," she says. "I've been Guardian of Ravencrest for nearly fifty years, but my connection to the nexus is weakening. I need to pass on my knowledge and responsibilities while I still can."</p>
			  <p>She looks at you with hopeful eyes. "The choice must be yours freely made. Being a Guardian means a life of service, of secrets, but also of wonders beyond imagination."</p>`,
		background: "decision-moment.jpg",
		choices: [
			{ id: "become_apprentice", text: "[1.1.2.3.1.1.1.1.1] Accept the role as Guardian apprentice", next: "apprentice_beginning" },
			{ id: "request_consideration", text: "[1.1.2.3.1.1.1.1.2] Ask for time to consider", next: "consideration_period" },
			{ id: "reluctant_refusal", text: "[1.1.2.3.1.1.1.1.3] Reluctantly refuse the role", next: "refuse_guardian" }
		],
		addToJournal: "I've accepted that the artifacts are real, which means everything Ms. Blackwood told me about multiple realities is true. She explained that the library chose me because I possess qualities needed in a Guardian: curiosity, respect for knowledge, intuition, and adaptability. She's offering to train me as her replacement, but it's my choice whether to accept this responsibility."
	},

	// Path 1.1.2.3.1.1.1.1.1: Accept the role as Guardian apprentice
	"apprentice_beginning": {
		text: `<p>"I accept," you say, the words feeling right as they leave your lips. "I want to learn. I want to become a Guardian."</p>
			  <p>Ms. Blackwood's face brightens. "I'm glad. The transition between Guardians is always a delicate time for the nexus. Having you accept willingly makes everything smoother."</p>
			  <p>She places her hand on the Codex, and the blue glow intensifies. "Let's make it official, shall we?"</p>
			  <p>She gestures for you to place your hand beside hers on the book. When you do, a warm sensation flows up your arm and spreads throughout your body. The symbols on the page rearrange themselves, and you're shocked to see your name appear in elegant script, listed below Ms. Blackwood's in what appears to be a lineage of Guardians stretching back centuries.</p>
			  <p>"The Codex now recognizes you as Guardian-in-training," she explains. "Your apprenticeship has begun."</p>
			  <p>Over the following months, you split your time between your regular duties as night librarian and your secret training in the archive. Ms. Blackwood—Eleanor, as she asks you to call her—teaches you the history of Ravencrest, the nature of the multiverse, and the techniques for maintaining the boundaries between worlds.</p>
			  <p>You learn to read the shifting text of the Codex, to navigate the archive's impossible geography, and to identify books and artifacts from different realities. Most importantly, you learn to sense the subtle energies of the nexus itself, the flows and patterns that connect disparate worlds.</p>
			  <p>Six months later, during a private ceremony attended by Guardians from other nexus points around the world, you formally accept the mantle of Ravencrest's next Guardian.</p>
			  <p>Your ordinary life has transformed into something extraordinary—a life of wonder, responsibility, and incredible purpose.</p>
			  <p class="ending">THE END - You have become the new Guardian of Ravencrest Library</p>`,
		background: "guardian-ceremony.jpg",
		ending: "guardian",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "I've accepted the role of Guardian apprentice. My name has been recorded in the Codex, and for the past six months, Ms. Blackwood (Eleanor) has been training me in the arts of maintaining the balance between worlds. Today, in a ceremony with Guardians from other nexus points worldwide, I formally became Ravencrest's next Guardian. My life has completely transformed, and I've found my true purpose."
	},

	// Path 1.1.2.3.1.1.1.1.2: Ask for time to consider
	"consideration_period": {
		text: `<p>"This is... a lot to process," you say carefully. "I believe what you've shown me, but becoming a Guardian is a massive responsibility. I need time to think about it."</p>
			  <p>Ms. Blackwood nods understanding. "Of course. Such decisions shouldn't be rushed. The library has waited centuries for the right Guardians—it can wait a little longer for your answer."</p>
			  <p>She removes a small, ornate pocket watch from her vest—different from the artifact you examined earlier. "Take this. It's attuned to the archive. When you've made your decision, simply hold it and think of this place. It will guide you back."</p>
			  <p>You accept the watch, feeling a subtle warmth emanating from it.</p>
			  <p>"In the meantime," she continues, "carry on with your regular duties. But I must ask you not to speak of what you've seen here. The library's secrets must remain protected."</p>
			  <p>She escorts you back up the spiral staircase to the restricted section. As you prepare to part ways, she places a gentle hand on your shoulder.</p>
			  <p>"Listen to your intuition," she says. "It led you here for a reason."</p>
			  <p>The following weeks are strange ones. You continue your work as night librarian, but everything feels different. You notice patterns in the library you never saw before—symbols hidden in the architecture, connections between seemingly unrelated books, the subtle ways certain volumes seem to change their contents when no one is looking.</p>
			  <p>The pocket watch remains warm in your pocket, a constant reminder of the choice awaiting you.</p>`,
		background: "contemplation-period.jpg",
		choices: [
			{ id: "accept_after_time", text: "[1.1.1.2.3.1.1.1.2.1] Return and accept the role after two weeks", next: "delayed_acceptance" },
			{ id: "research_more", text: "[1.1.1.2.3.1.1.1.2.2] Research the library's history before deciding", next: "historical_research" },
			{ id: "decline_after_time", text: "[1.1.1.2.3.1.1.1.2.3] Return and respectfully decline", next: "respectful_decline" }
		],
		addToInventory: ["guardian_watch"],
		addToJournal: "I asked Ms. Blackwood for time to consider her offer. She gave me a special pocket watch that will guide me back to the archive when I'm ready to give my answer. In the weeks since, I've been noticing strange patterns and symbols throughout the library that I never saw before. The watch remains warm in my pocket, reminding me of the choice I need to make."
	},

	// Path 1.1.2.3.1.1.1.1.2.1: Return and accept the role after two weeks
	"delayed_acceptance": {
		text: `<p>For two weeks, the decision weighs on your mind. You find yourself drawn to books about parallel universes and multiverse theories, as if the library itself is guiding your research.</p>
			  <p>One evening, as you're closing up, you make your choice. Taking out the ornate watch, you hold it firmly and think of the hidden archive. The watch grows warm, then hot, and begins to pulse with a soft blue light.</p>
			  <p>Following an intuition you don't fully understand, you walk to the restricted section. The hidden door is visible to you now, though you suspect others would still see only a blank wall.</p>
			  <p>You descend the spiral staircase and find Ms. Blackwood waiting for you beside the Codex, as if she knew you were coming.</p>
			  <p>"I've made my decision," you tell her. "I want to become a Guardian."</p>
			  <p>Her smile is warm and relieved. "I had faith that you would return. The library rarely chooses incorrectly."</p>
			  <p>She motions you forward and places her hand on the Codex. "Place your hand beside mine."</p>
			  <p>When you do, the book's glow intensifies. The symbols rearrange themselves, and you watch in amazement as your name appears in the lineage of Guardians.</p>
			  <p>"Your apprenticeship begins now," she says formally. "There is much to learn, but we have time."</p>
			  <p>Over the following months, you divide your time between your regular duties and your training in the archive. Ms. Blackwood—Eleanor, as she now asks you to call her—teaches you the secrets of Ravencrest and the responsibilities of a Guardian.</p>
			  <p>You learn to read the shifting text of the Codex, to sense disturbances in the boundaries between worlds, and to guide knowledge safely across realities while preventing dangerous elements from crossing over.</p>
			  <p>One year later, during a ceremony attended by Guardians from other nexus points around the world, you formally accept the mantle of Ravencrest's next Guardian.</p>
			  <p>Your ordinary life has transformed into one of extraordinary purpose and wonder.</p>
			  <p class="ending">THE END - You have become the new Guardian of Ravencrest Library</p>`,
		background: "formal-guardian-ceremony.jpg",
		ending: "guardian",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "After two weeks of contemplation, I returned to the archive and accepted the role of Guardian apprentice. Ms. Blackwood—Eleanor—has been training me in maintaining the balance between worlds. I've learned to read the Codex and sense disturbances between realities. Today, after a year of training, I formally became Ravencrest's next Guardian during a ceremony with Guardians from around the world. I've found my true calling."
	},

	// Path 1.1.2.3.1.1.1.1.2.2: Research the library's history before deciding
	"historical_research": {
		text: `<p>Before making such a momentous decision, you decide to learn more about Ravencrest Library's history. Using your access to the library's archives and public records, you begin a careful investigation.</p>
			  <p>The official history is straightforward: founded in 1721 by industrialist Thaddeus Ravencrest, the library has been a center of learning for three centuries. But as you dig deeper, patterns emerge that can't be coincidental.</p>
			  <p>Every fifty years, almost exactly, a new head librarian takes over. Each comes with impeccable but difficult-to-verify credentials. Each makes subtle but significant changes to the library's architecture and collection.</p>
			  <p>You find newspaper archives mentioning strange occurrences around the library—unexplained lights, visitors claiming to have found rooms that couldn't exist according to the blueprints, books appearing in the catalog that no publisher ever produced.</p>
			  <p>Most telling is a journal you discover in the historical society archives, belonging to a library assistant from 1873. He describes finding a hidden door and a spiral staircase leading to "an impossible archive." His final entry mentions meeting "Ms. Hargrove, the Guardian" before the journal ends abruptly.</p>
			  <p>The evidence confirms everything Ms. Blackwood told you. With your research complete, you take out the ornate watch and hold it firmly, thinking of the hidden archive.</p>
			  <p>The watch grows warm as you're led back to the restricted section, down the spiral staircase, to where Ms. Blackwood waits by the Codex.</p>
			  <p>"I've been researching," you tell her. "I found mention of a Ms. Hargrove from 1873."</p>
			  <p>Ms. Blackwood smiles. "Margaret Hargrove was my predecessor's predecessor. Her portrait is just down that row, if you'd like to see it."</p>
			  <p>"I've made my decision," you continue. "I want to learn. I want to become a Guardian."</p>`,
		background: "historical-research.jpg",
		choices: [
			{ id: "begin_formal_training", text: "[1.1.1.2.3.1.1.1.2.2.1] Begin your formal Guardian training", next: "formal_training_begins" },
			{ id: "ask_past_guardians", text: "[1.1.1.2.3.1.1.1.2.2.2] Ask about past Guardians first", next: "accept_guardian_role" }	//	guardian_history
		],
		addToInventory: ["historical_journal"],
		addToJournal: "I spent time researching Ravencrest's history and found patterns confirming Ms. Blackwood's claims—a new head librarian every fifty years, strange occurrences, and even a journal from 1873 mentioning a 'Guardian' named Ms. Hargrove. When I returned to the archive with this knowledge, Ms. Blackwood confirmed that Margaret Hargrove was indeed a previous Guardian. I've now accepted the role and am ready to begin my training."
	},		

	// Path 1.1.2.3.1.1.1.1.2.2.1: Begin your formal Guardian training
	"formal_training_begins": {
		text: `<p>"Then let us begin," Ms. Blackwood says with evident satisfaction. She gestures to the Codex, and you both place your hands upon it.</p>
			  <p>The book's blue glow intensifies, and you feel a warm energy flow through your body. The symbols on the page rearrange themselves, and you watch as your name appears in flowing script, joining a lineage stretching back centuries.</p>
			  <p>"The Codex now recognizes you as Guardian-in-training," she explains. "Your apprenticeship has officially begun."</p>
			  <p>Ms. Blackwood—Eleanor, as she asks you to call her—proves to be a patient and thorough teacher. Your training covers everything from the metaphysical nature of the nexus to the practical skills of identifying books from different realities.</p>
			  <p>You learn to read the Codex's shifting text, to navigate the archive's impossible geography that seems to expand far beyond the physical constraints of the building above, and to sense disturbances in the boundaries between worlds.</p>
			  <p>Your research skills prove valuable as you catalog previously unclassified texts and artifacts. Your perspective as someone new to this hidden world helps you notice patterns that Eleanor, with her decades of experience, sometimes overlooks.</p>
			  <p>After months of intensive training, Eleanor begins introducing you to other Guardians via a magical communication system connected through similar nexus points worldwide. You meet Guardians from Alexandria, Timbuktu, and other ancient centers of learning.</p>
			  <p>One year later, during a formal ceremony in the archive attended by five other Guardians, you take the oath that officially makes you the next Guardian of Ravencrest Library.</p>
			  <p>Eleanor will stay on as your advisor for a few more years, but the primary responsibility now rests with you—a responsibility you embrace with both humility and pride.</p>
			  <p class="ending">THE END - You have become the new Guardian of Ravencrest Library</p>`,
		background: "guardian-training.jpg",
		ending: "guardian",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "My Guardian training has officially begun. The Codex now recognizes me as a Guardian-in-training. Eleanor (Ms. Blackwood) has been teaching me to read the Codex, navigate the archive's impossible geography, and sense disturbances between worlds. After a year of intensive training and meeting Guardians from other nexus points worldwide, I took the formal oath during a ceremony attended by five other Guardians. I am now officially the Guardian of Ravencrest Library."
	},

	// Path 1.1.2.3.1.1.1.1.2.3: Return and respectfully decline
	"respectful_decline": {
		text: `<p>After two weeks of serious consideration, you make your decision. Using the ornate watch, you return to the hidden archive where Ms. Blackwood waits beside the Codex.</p>
			  <p>"I've given this a great deal of thought," you tell her. "And while I'm honored by your offer and amazed by everything I've seen, I don't believe I'm the right person for this responsibility."</p>
			  <p>Though disappointment flickers across her face, Ms. Blackwood nods with understanding. "I appreciate your honesty. The role of Guardian must never be accepted reluctantly—it requires full commitment."</p>
			  <p>She takes back the watch you offer her. "What happens now?" you ask.</p>
			  <p>"Now the library will seek another," she says simply. "It may take years, but eventually someone else will find their way here."</p>
			  <p>She studies you thoughtfully. "However, the fact remains that you discovered the archive and now know its secrets. This creates a rather unique situation."</p>
			  <p>After a moment's consideration, she continues. "There is a role you might consider—not as Guardian, but as Keeper of Records. You would maintain your regular position, but also help preserve the library's secret history, without the broader responsibilities of maintaining the nexus."</p>
			  <p>"Many Guardians have had assistants who share their secrets but not their full burden," she explains. "You've shown integrity in your decision, and your research skills would be valuable to me in my remaining years as Guardian."</p>
			  <p>She offers you a different proposition—to work as her assistant, learning the library's secrets while documenting its history, but without the full responsibilities of maintaining the boundaries between worlds.</p>`,
		background: "alternative-role.jpg",
		choices: [
			{ id: "accept_keeper", text: "[1.1.1.2.3.1.1.1.2.3.1] Accept the role of Keeper of Records", next: "become_keeper" },
			{ id: "decline_entirely", text: "[1.1.1.2.3.1.1.1.2.3.2] Decline any involvement with the archive", next: "complete_separation" }
		],
		addToJournal: "After careful consideration, I returned to the archive and respectfully declined the Guardian role. Ms. Blackwood accepted my decision with understanding, saying the library will eventually choose someone else. She's offered me an alternative—to serve as 'Keeper of Records,' maintaining my regular job but also helping document the library's secret history without the full responsibility of maintaining the nexus."
	},

	// Path 1.1.2.3.1.1.1.1.2.3.1: Accept the role of Keeper of Records
	"become_keeper": {
		text: `<p>"That sounds... perfect, actually," you say, surprising yourself with how right the alternative feels. "I would be honored to serve as Keeper of Records."</p>
			  <p>Ms. Blackwood's expression brightens. "Excellent! The library will benefit greatly from your perspective and skills."</p>
			  <p>She guides you to a section of the archive you hadn't noticed before—a circular room lined with leather-bound journals. "These are the records of past Keepers, going back centuries. Some Guardians worked alone, but most had assistance from those like yourself—people who discovered the archive but felt called to document rather than maintain it."</p>
			  <p>She selects an empty journal bound in rich brown leather and offers it to you. "This will be yours to fill."</p>
			  <p>In the months that follow, you establish a new rhythm to your life. During regular hours, you perform your normal librarian duties. During special hours—typically late at night or early morning when the library is closed—you work in the archive, cataloging artifacts, documenting unusual occurrences, and recording the subtle shifts in the nexus that Ms. Blackwood teaches you to recognize.</p>
			  <p>You interview Ms. Blackwood extensively about her fifty years as Guardian, preserving her knowledge and experiences for future generations. As your understanding grows, you begin to notice patterns in the library's history that even she hadn't recognized.</p>
			  <p>You develop a comprehensive system for cataloging books and artifacts from different realities, making the archive more accessible and organized than it has been in centuries.</p>
			  <p>While Ms. Blackwood continues her search for a new Guardian, you find profound satisfaction in your role. You may not maintain the boundaries between worlds, but you preserve the knowledge of those who do—a contribution that will benefit Guardians for generations to come.</p>
			  <p class="ending">THE END - You have become the Keeper of Records for Ravencrest Library</p>`,
		background: "keeper-of-records.jpg",
		ending: "keeper",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToInventory: ["keeper_journal"],
		addToJournal: "I've accepted the role of Keeper of Records for Ravencrest Library. Rather than maintaining the boundaries between worlds, I document the archive's contents and the library's secret history. Ms. Blackwood showed me journals from past Keepers going back centuries and gave me my own to fill. I've developed a comprehensive cataloging system and recorded Ms. Blackwood's experiences as Guardian. While she continues searching for her successor, I find deep satisfaction in preserving this hidden knowledge for future generations."
	},

	// Path 1.1.2.3.1.1.1.1.2.3.2: Decline any involvement with the archive
	"complete_separation": {
		text: `<p>"I'm sorry," you say firmly but kindly. "I think it's better if I remove myself completely from all of this. The responsibility—even in a reduced capacity—isn't something I'm comfortable with."</p>
			  <p>Ms. Blackwood nods slowly. "I understand. Not everyone is meant to walk this path, in any capacity."</p>
			  <p>She looks troubled, however. "This does create a complication. You possess knowledge that very few in the outside world have access to. Knowledge that, in the wrong hands, could be dangerous."</p>
			  <p>Seeing your expression, she quickly adds, "I would never force anything upon you or harm you in any way. That's not how Guardians operate. But I must ask—can I trust you to keep what you've learned here confidential?"</p>
			  <p>"Of course," you assure her. "I won't speak of this place to anyone."</p>
			  <p>She seems relieved. "Thank you. In return, I offer you this."</p>
			  <p>From a drawer, she retrieves a small, ornate bookmark made of silver filigree. "This will ensure you always find what you truly need when browsing the library's collection. A small token of appreciation for your discretion."</p>
			  <p>You accept the gift, and she escorts you back up the spiral staircase. At the top, before parting ways, she fixes you with a gentle but serious gaze.</p>
			  <p>"Your regular duties need not change. We'll interact as librarian colleagues, nothing more. But should you ever change your mind or need assistance with anything unusual you encounter in your work here, my door is always open to you."</p>
			  <p>In the months that follow, you return to your normal routine. Sometimes, you catch Ms. Blackwood watching you with a wistful expression. Occasionally, books appear on your desk that you don't remember retrieving—always fascinating volumes that seem perfectly suited to your current interests.</p>
			  <p>The silver bookmark proves to be remarkably effective—helping you locate obscure references and perfect quotes with uncanny precision. It's your only tangible reminder of the hidden world beneath the library—a world you chose to walk away from, but which has left an indelible mark on how you see the ordinary one.</p>
			  <p class="ending">THE END - You returned to ordinary life with extraordinary knowledge</p>`,
		background: "return-to-ordinary.jpg",
		ending: "ordinary",
		choices: [
			{ id: "play_again", text: "Play Again", next: "start" },
			{ id: "credits", text: "View Credits", next: "credits" }
		],
		addToInventory: ["silver_bookmark"],
		addToJournal: "I declined any involvement with the archive or its secrets. Ms. Blackwood respected my decision but asked for my discretion, which I promised. She gave me a silver bookmark that helps me find exactly what I need in the library—a small token of appreciation for my silence. I've returned to my normal duties, though I occasionally notice Ms. Blackwood watching me, and books sometimes appear on my desk that perfectly match my interests. I've returned to ordinary life, but with extraordinary knowledge that has forever changed how I see the world."
	},
	
	// Path 1.1.1.2.3: Express skepticism about the whole situation
	"convince_skeptic": {
	  text: `<p>"This all sounds rather fantastical," you say, unable to hide your skepticism. "Multiple realities? Secret Guardians? It's hard to believe."</p>
			 <p>Elara nods patiently. "I understand your doubts. I had them too when I was first approached. Perhaps a demonstration would help?"</p>
			 <p>Without waiting for your response, she approaches one of the many bookshelves and selects a volume bound in deep blue leather. "This is a history book from what you might call a parallel world—one where the Roman Empire never fell."</p>
			 <p>She opens it carefully and shows you pages filled with photographs of modern cities dominated by Roman architecture, people in modified togas alongside contemporary clothing, and public buildings with Latin inscriptions.</p>
			 <p>"And this," she says, selecting another book, "is a scientific journal from a world where electricity was never discovered, but crystalline technologies developed instead."</p>
			 <p>The diagrams and formulas in this text are unlike anything you've seen in scientific literature, yet they have an internal consistency that would be difficult to fabricate.</p>
			 <p>"I could show you countless examples," Elara says, "but perhaps the most convincing evidence is something you've already experienced." She gestures toward the Codex. "The fact that you can read its changing text marks you as someone with the potential to perceive multiple realities."</p>`,
	  background: "skeptic-demonstration.jpg",
	  choices: [
		{ id: "request_more_proof", text: "[1.1.1.2.3.1] Request more concrete proof", next: "concrete_proof" },
		{ id: "consider_possibility", text: "[1.1.1.2.3.2] Consider the possibility it might be true", next: "accept_guardian_role" },	//	partial_acceptance
		{ id: "still_unconvinced", text: "[1.1.1.2.3.3] Remain unconvinced and suspicious", next: "accept_guardian_role" }		//	stronger_evidence
	  ],
	  addToJournal: "Elara attempted to convince me by showing books supposedly from other realities—one where the Roman Empire never fell and another with unfamiliar crystal-based technology instead of electricity. She claims my ability to read the Codex proves I can perceive multiple realities. It's fascinating but difficult to accept at face value."
	},

	// Path 1.1.1.2.3.1: Request more concrete proof
	"concrete_proof": {
	  text: `<p>"I need something more tangible," you insist. "Books can be fabricated. How do I know this isn't an elaborate hoax?"</p>
			 <p>Elara considers your request thoughtfully. "Very well. What would you consider irrefutable proof?"</p>
			 <p>Before you can answer, she continues, "Would seeing another reality with your own eyes suffice?"</p>
			 <p>She leads you to a small alcove hidden between towering shelves. At its center stands an ornate full-length mirror in an antique frame. Unlike an ordinary mirror, its surface ripples slightly, like water disturbed by a gentle breeze.</p>
			 <p>"This is a Threshold Mirror," Elara explains. "It allows Guardians to observe other realities without crossing over. With training, you'll learn to use it to travel between worlds, but for now, observation should be enough."</p>
			 <p>She touches the mirror's frame and speaks a few words in a language you don't recognize. The rippling surface clears, revealing what appears to be a library—similar to Ravencrest's main reading room, but subtly different. The architecture has an Art Nouveau influence absent in your world, and the patrons are dressed in clothing that combines Victorian and futuristic elements.</p>
			 <p>"This is Ravencrest as it exists in world E-379," Elara says. "One of the many parallel libraries connected to our nexus point."</p>
			 <p>As you watch, a librarian in that world glances toward the mirror and nods in recognition, giving a small wave before continuing her work.</p>`,
	  background: "threshold-mirror.jpg",
	  choices: [
		{ id: "test_mirror", text: "[1.1.1.2.3.1.1] Ask to test the mirror yourself", next: "mirror_test" },
		{ id: "acknowledge_evidence", text: "[1.1.1.2.3.1.2] Acknowledge this as compelling evidence", next: "accept_guardian_role" },	//	evidence_acceptance
		{ id: "question_mechanics", text: "[1.1.1.2.3.1.3] Question how the mirror works", next: "accept_guardian_role" }		//	mirror_explanation
	  ],
	  addToInventory: ["glimpse_photo"],
	  addToJournal: "Elara showed me what she calls a 'Threshold Mirror'—a mirror-like device that supposedly shows other realities. I saw what appeared to be an alternative version of Ravencrest Library with different architecture and strangely-dressed patrons. Most surprisingly, a librarian in that world seemed aware of us watching and waved. It's becoming harder to dismiss all this as an elaborate trick."
	},

	// Path 1.1.1.2.3.1.1: Test the mirror yourself
	"mirror_test": {
	  text: `<p>"May I try to control it myself?" you ask, stepping closer to the mirror.</p>
			 <p>Elara nods. "You may try, though it typically takes training to operate. Place your hand on the frame and think clearly about what you wish to see."</p>
			 <p>You place your palm against the cool metal of the mirror's frame. Feeling somewhat foolish, you concentrate on your childhood home, picturing it as clearly as possible.</p>
			 <p>To your astonishment, the mirror's surface blurs, then clears to reveal a house very similar to the one you grew up in—but with key differences. The color is wrong, the front garden is arranged differently, and there's a dormer window that never existed in your memory.</p>
			 <p>"What am I seeing?" you ask, breathless with shock.</p>
			 <p>"A version of your childhood home as it exists in a neighboring reality," Elara explains. "The mirror responds to your connection with places and people. It cannot show just anything—only locations that have resonance across realities."</p>
			 <p>Impulsively, you think about your present apartment. The mirror shifts again, showing your living room, but with furniture you've never owned and in a color scheme you'd never choose.</p>
			 <p>"Each decision we make creates divergences," Elara says quietly. "Somewhere, versions of us made different choices, leading to different lives. The boundaries between these realities are what Guardians maintain."</p>
			 <p>You remove your hand from the frame, and the mirror gradually returns to its rippling, undefined state.</p>
			 <p>"I... I believe you," you say finally. "Or at least, I'm willing to consider that what you're saying might be true."</p>`,
	  background: "using-mirror.jpg",
	  choices: [
		{ id: "ask_about_training", text: "[1.1.1.2.3.1.1.1] Ask what Guardian training involves", next: "training_overview" },
		{ id: "need_time", text: "[1.1.1.2.3.1.1.2] Ask for time to process everything", next: "accept_guardian_role" },	//	time_granted
		{ id: "willing_to_learn", text: "[1.1.1.2.3.1.1.3] Express willingness to learn more", next: "accept_guardian_role" }	//	begin_apprenticeship
	  ],
	  addToJournal: "I tried using the Threshold Mirror myself, focusing on my childhood home. Incredibly, it showed a version of my house with significant differences—wrong color, different garden layout, extra windows. When I thought about my current apartment, it showed an alternate version with furniture I've never owned. This personal experience has made it much harder to dismiss Elara's claims as fiction. I'm beginning to believe there might be something to all this."
	},

	// Path 1.1.1.2.3.1.1.1: Ask what Guardian training involves
	"training_overview": {
	  text: `<p>"If I were to consider this Guardian role," you begin cautiously, "what would the training involve?"</p>
			 <p>Elara's expression brightens. "The training covers several disciplines essential to maintaining the boundaries between realities."</p>
			 <p>She guides you back to the reading area and retrieves a slim volume from a nearby shelf. Opening it, she reveals diagrams of what appears to be the library, but with overlapping transparent layers, each slightly different from the others.</p>
			 <p>"First, you'd learn to perceive the layers of reality more clearly," she explains. "You already have the innate ability—it's why you could use the key and read the Codex—but with training, you'll be able to see the intersections without aids."</p>
			 <p>She turns to another page showing complex symbols. "Next comes the language of reality—symbols and words that allow you to influence the boundaries. Think of it as a programming language for the multiverse."</p>
			 <p>"You'll learn to identify books and artifacts from different realities, catalog them properly, and determine which can be safely shared and which must remain restricted. You'll study the history of Ravencrest and the network of sister libraries across realities."</p>
			 <p>"Finally, you'll develop your Guardian intuition—the ability to sense disturbances in the boundaries and address them before they become problematic."</p>
			 <p>She closes the book and looks at you intently. "The full training typically takes three years, though you would assume some responsibilities earlier. It's demanding work, but deeply rewarding."</p>
			 <p>She adds gently, "And before you ask—yes, you could still maintain aspects of your normal life during training. Previous trainees have balanced their studies with outside careers and relationships. The library adapts to its Guardians' needs."</p>`,
	  background: "training-manual.jpg",
	  choices: [
		{ id: "ask_about_dangers", text: "[1.1.1.2.3.1.1.1.1] Ask about potential dangers", next: "guardian_dangers" },
		{ id: "request_time", text: "[1.1.1.2.3.1.1.1.2] Request time to consider the offer", next: "consideration_period" },
		{ id: "accept_training", text: "[1.1.1.2.3.1.1.1.3] Accept the training offer", next: "accept_guardian_role" }	//	training_begins
	  ],
	  addToInventory: ["training_guide"],
	  addToJournal: "Elara explained that Guardian training would involve learning to perceive multiple realities more clearly, mastering the 'language of reality' (symbols that can influence boundaries between worlds), cataloging items from different realities, and developing 'Guardian intuition' to sense disturbances. The full training takes three years, though I could still maintain aspects of my normal life during this period. It sounds like learning to become a librarian for the multiverse."
	},

	// Path 1.1.1.2.3.1.1.1.1: Ask about potential dangers
	"guardian_dangers": {
	  text: `<p>"What are the dangers?" you ask. "There must be risks involved with managing multiple realities."</p>
			 <p>Elara's expression grows serious. "I appreciate your directness. Yes, there are dangers."</p>
			 <p>She leads you to a section of the archive where a glass case contains what appears to be damaged books and artifacts. Some are partially transparent, others seem to flicker in and out of existence, and a few are blackened as if burned.</p>
			 <p>"Reality contamination is the most common danger," she explains. "Extended exposure to foreign realities can cause physical and psychological effects—temporal disorientation, memory blending, even identity diffusion in severe cases. Our training includes protective techniques to minimize these risks."</p>
			 <p>She points to a book that seems to be slowly dissolving. "There are also hostile entities that seek to exploit the connections between worlds. Some are merely curious travelers, but others wish to extract knowledge or resources, or even colonize other realities."</p>
			 <p>"The most dangerous threats are what we call Voids—spaces where reality has collapsed or been damaged. They can spread if not contained, consuming everything they touch and removing it from existence."</p>
			 <p>Her voice softens. "I won't mislead you—three Guardians in Ravencrest's history died protecting the boundaries. Others suffered injuries or lasting effects from their work."</p>
			 <p>She turns to face you directly. "But we take every precaution, and the training prepares you thoroughly. No Guardian works alone—we have a network across multiple realities providing support and assistance."</p>
			 <p>"The risks are real," she concludes, "but they're manageable with proper preparation. And the importance of our work cannot be overstated."</p>`,
	  background: "damaged-artifacts.jpg",
	  choices: [
		{ id: "too_dangerous", text: "[1.1.1.2.3.1.1.1.1.1] Decide it's too dangerous", next: "decline_politely" },
		{ id: "brave_decision", text: "[1.1.1.2.3.1.1.1.1.2] Make a brave decision to continue", next: "accept_guardian_role" },	//	courageous_choice
		{ id: "compromise", text: "[1.1.1.2.3.1.1.1.1.3] Ask for a compromise solution", next: "accept_guardian_role" }	//	limited_involvement
	  ],
	  addToJournal: "Elara didn't sugarcoat the dangers: 'reality contamination' can cause temporal disorientation and memory problems; hostile entities from other realities sometimes try to exploit connections between worlds; and 'Voids'—collapsed regions of reality—can spread if not contained. Three previous Guardians died protecting the boundaries. Despite these risks, Guardians have a support network and training to manage these dangers. It's sobering information, but at least she's being honest."
	},

	// Path 1.1.1.2.3.1.1.1.1.1: Decide it's too dangerous
	"decline_politely": {
	  text: `<p>"I appreciate your honesty," you say after a long silence. "But this sounds far too dangerous. I'm just a librarian—not someone equipped to handle threats from other realities or these Void things."</p>
			 <p>Elara nods with understanding rather than disappointment. "Your caution is reasonable. Not everyone is meant for this path, regardless of their potential."</p>
			 <p>She escorts you back to the Codex pedestal. "Before you go, there's something you should know. Once you've seen beyond the veil of reality, you cannot fully return to ignorance. The key will remain yours, and this place will remain accessible to you."</p>
			 <p>"In time, you may notice things—patterns in the library's collection, visitors who seem slightly out of place, books whose contents shift subtly between readings. These are glimpses of the reality you now know exists."</p>
			 <p>She places a small silver pendant in your hand. "If you ever change your mind, or if you encounter something unusual that concerns you, hold this and speak my name. I'll hear you."</p>
			 <p>You climb the spiral staircase back to the main library, your mind whirling with everything you've learned. Over the following weeks, you try to return to your normal routine, but Elara was right—you notice things now. Patrons who visit the library yet interact with no one, books that weren't in the catalog yesterday, whispered conversations in languages that sound like no earthly tongue.</p>
			 <p>One evening, you spot a young woman desperately trying to return a book that appears to be slowly dissolving at the edges. When she leaves, you examine it and find pages describing your own life with alarming accuracy—including your recent discovery of the archive.</p>
			 <p>That night, standing in your apartment, you look at the silver pendant Elara gave you and wonder if you made the right choice.</p>`,
	  background: "contemplating-pendant.jpg",
	  choices: [
		{ id: "remain_uninvolved", text: "[1.1.1.2.3.1.1.1.1.1.1] Remain uninvolved despite your knowledge", next: "normal_life_ending" },
		{ id: "contact_elara", text: "[1.1.1.2.3.1.1.1.1.1.2] Contact Elara about the dissolving book", next: "return_to_guardian_path" },
		{ id: "independent_research", text: "[1.1.1.2.3.1.1.1.1.1.3] Begin your own independent research", next: "accept_guardian_role" }	//	self_taught_path
	  ],
	  addToInventory: ["silver_pendant"],
	  addToJournal: "I declined Elara's offer, telling her it seemed too dangerous for someone like me. She was understanding and gave me a silver pendant, telling me I could contact her if I changed my mind. In the weeks since, I've noticed strange occurrences in the library—unusual patrons, shifting books, and today, a dissolving book that somehow contained details about my own life. I'm beginning to wonder if I can truly ignore what I've learned."
	},

	// Path 1.1.1.2.3.1.1.1.1.1.1: Remain uninvolved despite your knowledge
	"normal_life_ending": {
	  text: `<p>You place the silver pendant in a drawer and resolve to ignore the strange occurrences. This isn't your responsibility—you're just a night librarian, not some interdimensional Guardian.</p>
			 <p>For a while, you succeed in maintaining your normal routine. You catalog books, assist the occasional late-night researcher, and pretend not to notice when volumes rearrange themselves on the shelves or when patrons fade from view while walking between stacks.</p>
			 <p>Months pass. You receive a promotion to assistant manager of the library's night operations. The work is satisfying, even if you sometimes feel a pull toward the restricted section and the hidden door you know waits there.</p>
			 <p>One evening, a distinguished elderly man visits the library. As you help him locate a reference book, he studies you with unusual intensity.</p>
			 <p>"You're aware, aren't you?" he asks suddenly. "You've seen beyond the veil."</p>
			 <p>Before you can respond, he continues, "I'm Thorne, Guardian of the Westbrook Archive. Elara mentioned you—the one who declined training."</p>
			 <p>He hands you a business card. "We respect your choice, but should you ever need assistance with...unusual literary matters, my colleagues and I are at your disposal."</p>
			 <p>Over the years, you develop an unofficial relationship with the network of Guardians. You alert them to strange occurrences at Ravencrest, and occasionally they consult you about patrons or texts from your reality.</p>
			 <p>You never fully embrace the Guardian path, but neither do you fully reject it. You carve out a unique role for yourself—a friend to the Guardians, a protector of your small corner of Ravencrest, and a keeper of secrets most people will never know exist.</p>
			 <p>It's not the life of grand adventure that might have been yours, but it has its own quiet satisfaction. And the silver pendant remains in your drawer, unused but never forgotten.</p>
			 <p class="ending">THE END - The Friend of Guardians</p>`,
	  background: "casual-guardian.jpg",
	  ending: "friend_of_guardians",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I chose to remain uninvolved and live a normal life despite my knowledge of multiple realities. I did my best to ignore the strange occurrences at the library. Eventually, I met Thorne, a Guardian from another archive who offered his assistance if needed. Over time, I developed an unofficial relationship with the network of Guardians—alerting them to strange occurrences but never fully joining their ranks. I found my own path: not a full Guardian, but a friend to them and a keeper of secrets most will never know."
	},

	// Path 1.1.1.2.3.1.1.1.1.1.2: Contact Elara about the dissolving book
	"return_to_guardian_path": {
	  text: `<p>The dissolving book troubles you deeply. After a sleepless night, you take out the silver pendant and whisper, "Elara."</p>
			 <p>The pendant grows warm in your palm. Minutes later, your phone rings—an unknown number.</p>
			 <p>"I've been expecting your call," Elara's voice comes through clearly. "You've seen something that concerns you."</p>
			 <p>You explain about the dissolving book and its contents. Her sharp intake of breath tells you this is serious.</p>
			 <p>"That's a Reality Echo—a dangerous manifestation. The book is dissolving because it doesn't belong in our reality. Please bring it to the archive immediately."</p>
			 <p>That night, you return to the library and descend the spiral staircase with the troubling book carefully wrapped in cloth. Elara meets you at the bottom, her expression both concerned and pleased to see you.</p>
			 <p>Together, you examine the book in a specially shielded alcove. "This is a Biographical Bleed," she explains. "Sometimes, when reality boundaries weaken, texts form spontaneously, drawing content from across worlds. This one has attached itself to your narrative thread."</p>
			 <p>She demonstrates how to safely neutralize it using symbols drawn in a special ink. As you work together, she observes, "You have a natural aptitude for this."</p>
			 <p>When the book is stabilized, she looks at you thoughtfully. "I respect your decision to decline Guardian training. But perhaps there's a middle path—a limited apprenticeship focused on defensive techniques and basic boundary maintenance."</p>
			 <p>"You wouldn't need to commit to becoming a full Guardian," she continues. "But you would have the knowledge to protect yourself and others from phenomena like this."</p>
			 <p>Her offer is tempting. It would allow you to explore this new reality while maintaining some distance from its greatest dangers.</p>`,
	  background: "examining-echo-book.jpg",
	  choices: [
		{ id: "accept_limited", text: "[1.1.1.2.3.1.1.1.1.1.2.1] Accept limited apprenticeship", next: "limited_guardian" },
		{ id: "full_commitment", text: "[1.1.1.2.3.1.1.1.1.1.2.2] Commit to full Guardian training instead", next: "full_guardian_training" },
		{ id: "assist_occasionally", text: "[1.1.1.2.3.1.1.1.1.1.2.3] Offer to assist occasionally without training", next: "occasional_assistant" }
	  ],
	  addToJournal: "I contacted Elara about the dissolving book, which she identified as a 'Reality Echo' or 'Biographical Bleed'—a dangerous manifestation from another reality that had somehow attached to my 'narrative thread.' She taught me how to neutralize it and then offered a compromise: a limited apprenticeship focused on defensive techniques without committing to becoming a full Guardian. It's an appealing middle path that would give me some ability to handle these phenomena."
	},

	// Path 1.1.1.2.3.1.1.1.1.1.2.1: Accept limited apprenticeship
	"limited_guardian": {
	  text: `<p>"A limited apprenticeship sounds reasonable," you tell Elara. "I'm not ready to commit my life to this, but I can't ignore what I've seen either."</p>
			 <p>She smiles warmly. "A wise compromise. We'll begin with protective techniques and basic reality maintenance—practical skills that will serve you regardless of your ultimate path."</p>
			 <p>Thus begins your unusual education. Three evenings a week, after your regular shift ends, you descend to the archive for lessons with Elara and occasionally other Guardians who visit Ravencrest.</p>
			 <p>You learn to identify books from other realities, to perform basic boundary maintenance rituals, and to shield your mind from reality contamination. You practice with the Threshold Mirror until you can reliably observe neighboring worlds without assistance.</p>
			 <p>Your dual life continues for two years. To your colleagues, you're simply an ambitious librarian pursuing advanced studies. Only you know that your "studies" involve stabilizing reality fluctuations and cataloging artifacts from parallel worlds.</p>
			 <p>As your apprenticeship progresses, you develop a reputation among the Guardian network as a reliable troubleshooter—someone who can address minor boundary disturbances without the full commitment of Guardian status.</p>
			 <p>When Elara finally retires, she doesn't pressure you to take her place. Instead, a Guardian from another nexus transfers to Ravencrest, while you maintain your specialized role.</p>
			 <p>Years pass, and you advance in both your public career and your secret work. Eventually, you become the library's director, using your position to subtly protect Ravencrest's special nature while continuing your part-time Guardian duties.</p>
			 <p>It's an unusual path—neither fully embracing nor rejecting the Guardian legacy—but it's one uniquely suited to your strengths and boundaries. You've found balance between extraordinary knowledge and ordinary life.</p>
			 <p class="ending">THE END - The Guardian Specialist</p>`,
	  background: "limited-training.jpg",
	  ending: "specialist",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I accepted Elara's offer of a limited apprenticeship, learning defensive techniques and basic reality maintenance while keeping my regular job. Over two years, I developed practical Guardian skills—identifying books from other realities, performing boundary maintenance, and using the Threshold Mirror. I became known as a reliable troubleshooter who could handle minor issues without full Guardian commitment. When Elara retired, I didn't take her place but continued my specialized role while advancing in my regular library career. I found my own unique balance between the extraordinary and ordinary."
	},

	// Path 1.1.1.2.3.1.1.1.1.1.2.2: Commit to full Guardian training
	"full_guardian_training": {
	  text: `<p>Holding the neutralized book, you make a decision that surprises even yourself. "Actually, I think I've been hesitating out of fear rather than genuine reluctance. I'd like to commit to the full Guardian training."</p>
			 <p>Elara's eyes widen slightly, but her smile is warm. "Sometimes it takes witnessing a real threat to understand the importance of our work. I'm pleased by your decision."</p>
			 <p>Your training begins immediately and proves more demanding than you imagined. By day, you maintain your role at the library; by night, you study reality mechanics, protective techniques, and the history of the nexus network.</p>
			 <p>You learn to read the shifting text of the Codex, to navigate the archive's hidden sections, and to perform the rituals that strengthen reality boundaries. Advanced lessons include reality walking—brief, controlled visits to neighboring worlds.</p>
			 <p>Your first supervised crossing is to a version of Ravencrest where books are stored in crystalline memory structures rather than on paper. The air there tastes different, the light falls at strange angles, and you return with a slight temporal disorientation that takes days to fade.</p>
			 <p>A year into your training, a significant boundary weakness develops between Ravencrest and a reality where knowledge is strictly controlled by an authoritarian regime. Their agents attempt to infiltrate through the weakened border, seeking unrestricted texts that are forbidden in their world.</p>
			 <p>Despite your incomplete training, you help Elara and other Guardians repel the incursion and repair the boundary. Your quick thinking during the crisis saves a visiting researcher from being stranded in the wrong reality.</p>
			 <p>Three years later, when Elara announces her retirement, she formally nominates you as her successor. In a ceremony attended by Guardians from seventeen realities, you accept the full responsibilities and title of Guardian of Ravencrest.</p>
			 <p>Your initial fears have transformed into confidence, your skepticism into wonder at the multiverse you now help protect.</p>
			 <p class="ending">THE END - The Reluctant Guardian</p>`,
	  background: "full-guardian-ceremony.jpg",
	  ending: "reluctant_guardian",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "After seeing the reality echo book, I surprised myself by committing to full Guardian training. The training was demanding—studying reality mechanics by night while maintaining my day job. I learned to read the Codex, perform boundary-strengthening rituals, and even visit neighboring realities. A year in, I helped repel agents from an authoritarian reality trying to steal unrestricted texts through a weakened boundary. Three years later, I officially succeeded Elara as Guardian of Ravencrest. My journey from skeptic to Guardian was complete, my fears transformed into confidence."
	},

	// Path 1.1.1.2.3.1.1.1.1.1.2.3: Offer to assist occasionally without training
	"occasional_assistant": {
	  text: `<p>"I'm not comfortable with any formal training," you tell Elara, "but I'd be willing to assist occasionally. When something unusual appears, I could alert you."</p>
			 <p>Elara considers this, then nods slowly. "An informal arrangement. It's not ideal, but having vigilant eyes in the main library would be valuable. I accept your offer."</p>
			 <p>She teaches you a few basic techniques—how to identify reality fluctuations, how to temporarily stabilize minor disturbances, and how to contact her or other Guardians in emergencies.</p>
			 <p>"Consider yourself a sentinel," she says, "rather than a Guardian-in-training."</p>
			 <p>In the months that follow, you develop a new routine. During your regular shifts, you maintain a watchful eye for anything unusual. Occasionally, you spot patrons who don't quite belong or books that shouldn't exist in this reality.</p>
			 <p>You document these occurrences and pass the information to Elara. Sometimes, when the situation seems safe enough, you investigate further—confirming details before involving the Guardians.</p>
			 <p>Your position in the "normal" library proves unexpectedly valuable. You notice patterns the full Guardians miss—subtle changes in patron behavior before boundary fluctuations, correlations between certain acquisitions and reality disturbances.</p>
			 <p>As years pass, you become known in Guardian circles as "The Librarian"—an informal but respected ally who maintains a foot in both worlds. You never learn the deepest secrets of the archive or master advanced techniques, but your unique perspective and public position make you an essential part of Ravencrest's protection.</p>
			 <p>When Elara eventually retires, her replacement—a Guardian from the Eastern nexus—continues your arrangement, acknowledging that some insights can only come from someone who hasn't fully crossed the threshold between ordinary and extraordinary.</p>
			 <p class="ending">THE END - The Sentinel Librarian</p>`,
	  background: "sentinel-librarian.jpg",
	  ending: "sentinel",
	  choices: [
		{ id: "play_again", text: "Play Again", next: "start" },
		{ id: "credits", text: "View Credits", next: "credits" }
	  ],
	  addToJournal: "I declined formal training but offered to serve as an occasional assistant, alerting Elara to unusual occurrences in the main library. She taught me basic techniques for identifying and temporarily stabilizing reality fluctuations. I became a 'sentinel' rather than a Guardian-in-training. My position in the normal library proved valuable—I noticed patterns the full Guardians missed. Over time, I became known as 'The Librarian' in Guardian circles—an informal but respected ally with a unique perspective from straddling both worlds."
	},
	
	
	

	// More story nodes will be added to complete all narrative branches
  
  
  
	// ending node
	"accept_guardian_role": {
		text: `<p>"What exactly is a Guardian?" you ask, finding yourself drawn to the elderly woman and the knowledge she represents.</p>
			<p>She smiles warmly. "A Guardian protects the balance between worlds. We ensure knowledge flows safely across boundaries without allowing dangerous elements to pass through."</p>
			<p>She gestures around at the archive. "This library exists in many planes simultaneously. What appears as fiction in one world may be history in another. The Codex helps us navigate these currents of information."</p>
			<p>She extends her hand. "I am Elara, the current Guardian of Ravencrest, though my time is ending. I've watched you since you arrived—your curiosity, your respect for knowledge, your intuition. The Codex responding to you confirms what I already suspected."</p>
			<p>Over the following weeks, Elara teaches you the secret history of the library and the responsibilities of a Guardian. You learn to access different sections of the archive that exist between realities and to understand the Codex's shifting text.</p>
			<p>Six months later, in a ceremony attended by Guardians from other nexus points around the world, you formally accept the role of Ravencrest's new Guardian.</p>
			<p>Your life has changed forever, but as you stand in the hidden archive, the Codex glowing before you and infinite knowledge at your fingertips, you know you've found your true calling.</p>
			<p class="ending">THE END - You have become the new Guardian of Ravencrest Library</p>`,
		background: "guardian-ceremony.jpg",
		ending: "guardian",
		choices: [
		  { id: "play_again", text: "Play Again", next: "start" },
		  { id: "credits", text: "View Credits", next: "credits" }
		],
		addToJournal: "I've accepted my destiny as the next Guardian of Ravencrest Library. Elara, the elderly woman, has been training me in the secret arts of maintaining the balance between worlds. The library exists across multiple planes of reality, and as Guardian, I'll protect the flow of knowledge between them. Today I participated in a formal ceremony officially making me the new Guardian. My ordinary life is behind me, but an extraordinary one has just begun."
	},
	
	
	
	// Credits node to display game credits
	"credits": {
	  text: `<p class="credits-header">The Librarian's Secret</p>
			<p class="credits-title">Created by</p>
			<p class="credits-name">John Adeyemi</p>
			
			<p class="credits-title">Story & Writing</p>
			<p class="credits-name">John Adeyemi</p>
			
			<p class="credits-title">Programming</p>
			<p class="credits-name">John Adeyemi</p>
			
			<p class="credits-title">Visual Design</p>
			<p class="credits-name">John Adeyemi</p>
			
			<p class="credits-title">Sound Design</p>
			<p class="credits-name">John Adeyemi</p>
			
			<p class="credits-title">Special Thanks</p>
			<p class="credits-name">Libraries Everywhere</p>
			<p class="credits-name">Book Lovers</p>
			<p class="credits-name">Mystery Enthusiasts</p>
			
			<p class="credits-footer">Thank you for playing!</p>`,
	  background: "credits-background.jpg",
	  choices: [
		{ id: "play_again_from_credits", text: "Play Again", next: "start" },
		{ id: "main_menu", text: "Main Menu", next: "main_menu" }
	  ]
	},

	// Main menu node for returning from credits
	"main_menu": {
	  text: `<p class="menu-welcome">Welcome to</p>
			<p class="menu-title">The Librarian's Secret</p>
			<p class="menu-subtitle">A Digital Choose-Your-Path Mystery</p>
			<p class="menu-description">Uncover the mysteries of Ravencrest Library, where books are merely the beginning...</p>`,
	  background: "main-menu-background.jpg",
	  choices: [
		{ id: "start_new_game", text: "Begin Your Journey", next: "start" },
		{ id: "about_game", text: "About This Game", next: "about" }
	  ]
	},

	// About node providing game information
	"about": {
	  text: `<p class="about-header">About The Librarian's Secret</p>
			<p>This interactive narrative experience invites you to explore the mysteries of Ravencrest Library, where reality and fiction intermingle in unexpected ways.</p>
			<p>As a night librarian who discovers a hidden key, you'll navigate through branching storylines, make crucial decisions, and potentially uncover the truth behind the library's ancient secrets.</p>
			<p>Your choices matter - each decision you make shapes your unique journey and determines which of the multiple endings you'll discover.</p>
			<p>The game features:</p>
			<ul>
			  <li>Multiple storylines with branching narratives</li>
			  <li>Various endings based on your choices</li>
			  <li>An inventory system to track important items</li>
			  <li>A journal that records your discoveries</li>
			  <li>Atmospheric visuals and sound design</li>
			</ul>
			<p>Begin your adventure and discover what lies beyond the bookshelves of Ravencrest Library!</p>`,
	  background: "about-background.jpg",
	  choices: [
		{ id: "return_to_menu", text: "Return to Menu", next: "main_menu" }
	  ]
	}
	
	
	
};