"use client";
import { CssVarsProvider } from '@mui/joy/styles';
import { getInitColorSchemeScript } from '@mui/joy/styles';

export default function Home() {


    return (
        <CssVarsProvider defaultMode="system">
            <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2 ">
                {getInitColorSchemeScript()}
                <div className='flex flex-col gap-2'>
                    <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

                    <p className="mb-4"><strong>Last Updated:</strong> 19/11/2023 21:00 UTC+1</p>

                    <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                    <p>Welcome to pico.rynav.xyz (hereinafter referred to as "the Website"). This Privacy Policy explains how Rynav ("we," "us," or "our") collects, uses, discloses, and protects your personal information when you access or use our Website. Your use of the Website signifies your acceptance of this Privacy Policy.</p>

                    <h2 className="text-xl font-semibold mb-2 mt-4">2. Information We Collect</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>IP Addresses:</strong> We collect and store the IP addresses of visitors to our Website. These IP addresses are stored in plain text format in an SQLite database. We use this information for security purposes and to analyze the frequency and nature of requests made to our server.</li>
                        <li><strong>Query Data:</strong> In addition to IP addresses, we also store the queries made by users to our server. This query data is associated with the corresponding IP address and is used for security and statistical purposes.</li>
                        <li><strong>Downloaded Files:</strong> We may collect and store information about downloaded files, including the downloader's IP address, for security and analytical purposes. This data is used to monitor and enhance the performance and quality of our services.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2 mt-4">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Security:</strong> We use IP addresses and query data for security purposes, including the detection and prevention of attacks on our server and the protection of our Website's integrity.</li>
                        <li><strong>Statistics:</strong> We analyze query data to gather statistics about the amount and frequency of requests made to our server. This helps us understand user behavior and improve our services.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2 mt-4">4. Disclosure of Your Information</h2>
                    <p>We do not disclose your IP addresses or query data to third parties, except in cases where we are legally obligated to do so or to protect and defend our rights and property.</p>

                    <h2 className="text-xl font-semibold mb-2 mt-4">5. Security</h2>
                    <p>We take reasonable measures to protect the information we collect, including the IP addresses and query data. However, please be aware that no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>

                    <h2 className="text-xl font-semibold mb-2 mt-4">6. Your Choices</h2>
                    <p>You may have certain rights regarding your personal information, including the right to access, correct, or delete your information. Please contact us at <a href="mailto:contact@rynav.xyz" className="text-blue-500">contact@rynav.xyz</a> to exercise these rights.</p>

                    <h2 className="text-xl font-semibold mb-2 mt-4">7. Changes to this Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. The updated version will be posted on the Website with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>

                    <h2 className="text-xl font-semibold mb-2 mt-4">8. Contact Information</h2>
                    <p>If you have questions or concerns about this Privacy Policy or the data we collect, please contact us at <a href="mailto:contact@rynav.xyz" className="text-blue-500">contact@rynav.xyz</a>.</p>

                    <p className="mt-6">By using Pico.rynav.xyz, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>

                    <p className="mt-4">Michał (Rynav)</p>
                    <p className="text-blue-500">Contact Email: <a href="mailto:contact@rynav.xyz">contact@rynav.xyz</a></p>
                    <p className="mb-4"><strong>Last Updated:</strong> 30/09/2023 23:38 UTC+2</p>

                </div>
            </main>
        </CssVarsProvider>
    )
}
