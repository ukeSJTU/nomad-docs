import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';

const docsOptions: DocsLayoutProps = {
  ...baseOptions(),
  tree: source.pageTree,
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo owner="ukeSJTU" repo="nomad" className="lg: -mx-2" />
      ),
    },
  ],
};


export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout {...docsOptions}>
      {children}
    </DocsLayout>
  );
}
