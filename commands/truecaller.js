const {
	cmd,
	truecaller,
	isPublic
} = require('../lib/');

cmd({
	pattern: 'true',
	react: "🔎",
	desc: 'search number on truecaller',
	category: 'search'
}, async (Void, citel, text) => {
	if (!citel && !Void.quoted) return await Void.reply('_Enter the number you want to search_');
	const number = Void.quoted ? Void.quoted.sender : citel.replace(/[^0-9]/g, '')
	const result = await truecaller(number, Void.user_id)
	return await Void.reply(result);
})