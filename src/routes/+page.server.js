import { redirect } from '@sveltejs/kit';
import { login } from 'studentvue.js'
export async function load({ cookies }) {
    // Check if we have the account cookie, if we don't head to login
    if (!cookies.get('account')) {
    throw redirect(302, '/login');
    }
    const decoded = atob(cookies.get('account'));
    const [username, password] = decoded.split(':');
    return {
        schedule: JSON.parse(await schedule(username, password))
      };
  }

  async function schedule(username, password) {
    return login('https://ga-gcps-psv.edupoint.com', username, password).then(client => client.getSchedule());
  }
