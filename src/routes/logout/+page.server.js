import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	// Check if we have the account cookie, if we don't head to login
	if (!cookies.get('account')) {
		throw redirect(302, '/login');
	} else {
		cookies.set('account', '', { maxAge: 0 });
		throw redirect(302, '/');
	}
}
