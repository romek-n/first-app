<script setup>
definePageMeta({
	layout: false,
});
</script>

<template>
	<div class="bg-[url('/img/girl.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-screen grid grid-rows-[auto,1fr]
		items-center">
		<nav class="bg-black/50 px-6 py-4">
			<div class="text-white flex justify-between items-center">
				<a href="/" class="flex-shrink-0">
					<img src="/img/cascade.png" alt="Cascade" class="h-11 w-auto aspect-video" />
				</a>
				<ul class="flex gap-5 text-base">
					<li class="hover:bg-red-600 hover:text-white px-3 py-1 rounded-md transition duration-300">
						<a href="#">
							<span>Home</span>
						</a>
					</li>
					<li class="hover:bg-red-600 hover:text-white px-3 py-1 rounded-md transition duration-300">
						<a href="#">
							<span>About</span>
						</a>
					</li>
					<li class="hover:bg-red-600 hover:text-white px-3 py-1 rounded-md transition duration-300">
						<a href="#">
							<span>Services</span>
						</a>
					</li>
					<li class="hover:bg-red-600 hover:text-white px-3 py-1 rounded-md transition duration-300">
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
					<li class="hover:bg-red-600 hover:text-white px-3 py-1 rounded-md transition duration-300">
						<a href="#">
							<span>Feedback</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="-translate-y-1/4 grid gap-4">
			<div class="text-white text-center font-bold text-4xl">
				<span class="block">Welcome To Cascade</span>
				<span class="block">Create Something New</span>
			</div>
			<div class="text-white flex justify-center gap-6">
				<a href="#" class="bg-red-600 border-none shadow-md px-5 py-3 rounded-md">Explore More</a>
				<a href="#" class="bg-red-600 border-none shadow-md px-5 py-3 rounded-md">Subscribe Us</a>
			</div>
		</div>
	</div>
</template>

<style></style>
