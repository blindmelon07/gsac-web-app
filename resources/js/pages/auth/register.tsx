import { Head } from '@inertiajs/react';
import TextLink from '@/components/text-link';
import { login } from '@/routes';

export default function Register() {
    return (
        <>
            <Head title="Registration Disabled" />
            <div className="flex flex-col items-center gap-4 text-center">
                <p className="text-muted-foreground text-sm">
                    Public registration is not available. Contact an administrator to create an account.
                </p>
                <TextLink href={login()}>Back to login</TextLink>
            </div>
        </>
    );
}

Register.layout = {
    title: 'Registration Disabled',
    description: '',
};
