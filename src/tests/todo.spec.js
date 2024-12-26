import { test, expect } from '@playwright/test'

test.describe.parallel('todo tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Not have any task', async ({ page }) => {
    await expect(page.getByTestId('empty')).toBeVisible()
  })

  test('Create a new todo', async ({ page }) => {
    await page.getByTestId('input').fill('Task 1')
    await page.getByTestId('create').click()

    await expect(page.getByText('Task 1')).toBeVisible()
  })

  test('Make a task as done', async ({ page }) => {
    await page.getByTestId('input').fill('Task 1')
    await page.getByTestId('create').click()
    await page.getByTestId('complete').click()

    await expect(page.getByText('Task 1')).not.toHaveClass('false')
  })

  test('Delete a todo', async ({ page }) => {
    page.on('dialog', dialog => dialog.accept())
    await page.getByTestId('input').fill('Task 1')
    await page.getByTestId('create').click()
    await page.getByTestId('delete').click()

    await expect(page.getByTestId('empty')).toBeVisible()
  })
})
