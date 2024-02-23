"use client";
import { CssVarsProvider } from '@mui/joy/styles';
import { getInitColorSchemeScript } from '@mui/joy/styles';

export default function Home() {


  return (
    <CssVarsProvider defaultMode="system">
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2 ">
        {getInitColorSchemeScript()}
        <div className='flex flex-col gap-2'>
          <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>

          <p className="mb-4"><strong>Last Updated:</strong> 30/09/2023 23:38 UTC+2</p>

          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>Welcome to pico.rynav.xyz (hereinafter referred to as "the Website"). By accessing or using this Website, you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.</p>

          <h2 className="text-xl font-semibold mb-2 mt-4">2. Description of Service</h2>
          <p>Pico.rynav.xyz is a website owned and operated by Rynav ("we," "us," or "our") that provides tools to sort, filter, and find data posted to the picosong.com website before it shut down. Please note that all content on this Website is static and sourced directly from our server. We do not validate the integrity of the data, and it is provided for informational purposes.</p>

          <h2 className="text-xl font-semibold mb-2 mt-4">3. Acceptable Use</h2>
          <p>You agree to use the Website in accordance with all applicable laws and regulations. You shall not:</p>
          <ul className="list-disc pl-6">
            <li>Violate any applicable local, state, national, or international law or regulation.</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            <li>Engage in any conduct that restricts or inhibits any other user from using or enjoying the Website.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2 mt-4">4. Content Ownership</h2>
          <ul className="list-disc pl-6">
            <li>All content and materials available on the Website, including but not limited to text, graphics, logos, images, and software, are the property of Rynav or its licensors and are protected by intellectual property laws.</li>
            <li>You may access and view the content on the Website for your personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works from any content or materials on the Website without our prior written consent.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2 mt-4">5. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the Website at our sole discretion, without notice, for any reason, including but not limited to a violation of these Terms.</p>

          <h2 className="text-xl font-semibold mb-2 mt-4">6. Changes to Terms</h2>
          <p>We may revise these Terms at any time by updating this page. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms. Please check this page regularly for updates.</p>

          <h2 className="text-xl font-semibold mb-2 mt-4">7. Contact Information</h2>
          <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:contact@rynav.xyz" className="text-blue-500">contact@rynav.xyz</a>.</p>

          <p className="mt-6">By using Pico.rynav.xyz, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>

          <p className="mt-4">Michał (Rynav)</p>
          <p>Contact Email: <a href="mailto:contact@rynav.xyz" className="text-blue-500">contact@rynav.xyz</a></p>
          <p className="mb-4"><strong>Last Updated:</strong> 30/09/2023 23:38 UTC+2</p>

        </div>
      </main>
    </CssVarsProvider>
  )
}
