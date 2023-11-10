<script>
	let benefits = [
		{
			metric: '10x',
			name: 'a college educated programer',
			description:
				'I earned a Bachelor\'s Degree in Computer Science from James Madison University, where my programming journey ignited during CS 149, an introduction to programming. Starting with Java, I progressed to C for lower-level programming and expanded my expertise. Though out my school years I specialized in Python for algorithms, data structures, AI, machine learning, data processing, and web development. JavaScript became my tool for dynamic web programming, web applications, front-end development, utilizing libraries like Svelte and React. I became an advanced user of SQL for database development and management. Then after leaving school I continued my learning through GoLang which I implemented in personal projects for the backend.'
                
		},
		{
			name: 'a life-long learner',
			description:
                'As a dedicated life-long learner in the realm of computer science, I have continually immersed myself in the ever-evolving landscape of technology. From venturing into learning the intricacies of machine learning algorithms to honing my skills in software engineering, my journey is marked by a relentless pursuit of knowledge. The dynamic nature of web development has been a constant source of inspiration, driving me to explore emerging frameworks and stay abreast of the latest industry trends. Embracing a growth mindset, I am committed to staying at the forefront of innovation, embracing each challenge as an opportunity to expand my expertise in these integral fields.'
				//'Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.'
		},
		{
			name: 'an excellent communicator',
			description:
				"Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
		}
	];
</script>

<main class="flex flex-col flex-1 p-20">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 pt-0 sm:py-20 sm:pt-0  xl:pl-36  pl-0">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-green-400">Tommy</span> Lane
				<br />Computer
				<span class="poppins text-green-400">Scientist</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-green-400"> favorite tech</span> Python, JavaScript(React or Sveltekit), TailwindCSS, Golang + PostgreSQL, mySql or Firebase/Firestore!
			</p>
			<button
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-green-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
				/>
				<h4 class="relative z-9">Get in touch &rarr;</h4>
			</button>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img src={'images/profile.png'} alt="Tommy Lane" class="object-cover z-[2] max-h-[70vh]" />
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-20 lg:pt-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-green-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
