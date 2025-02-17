import { tests, createContextContainer } from '@mantine/tests';
import { ProgressLabel, ProgressLabelProps, ProgressLabelStylesNames } from './ProgressLabel';
import { ProgressRoot } from '../ProgressRoot/ProgressRoot';

const TestContainer = createContextContainer(ProgressLabel, ProgressRoot, {});

const defaultProps: ProgressLabelProps = {};

describe('@mantine/core/ProgressLabel', () => {
  tests.itSupportsSystemProps<ProgressLabelProps, ProgressLabelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ProgressLabel',
    stylesApiSelectors: ['label'],
    stylesApiName: 'Progress',
    selector: '.mantine-Progress-label',
    compound: true,
    providerStylesApi: false,
  });
});
