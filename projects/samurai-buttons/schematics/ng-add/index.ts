import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		const content: Buffer | null = tree.read('./src/styles.scss');
		const content2Append = '@import "@material-design-icons/font"; \n';

		let strContent: string = '';

		if (content) strContent = content.toString();

		const updatedContent = content2Append + strContent;

		tree.overwrite('./src/styles.scss', updatedContent);

		return tree;
	};
}
