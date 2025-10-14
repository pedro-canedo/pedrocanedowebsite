import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/')
    
    // Check for main heading
    await expect(page.getByRole('heading', { name: /Pedro Canedo/i })).toBeVisible()
    
    // Check for CTA buttons
    await expect(page.getByRole('link', { name: /Ver Projetos/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Entrar em Contato/i })).toBeVisible()
  })

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/')
    
    await page.getByRole('link', { name: /Ver Projetos/i }).first().click()
    
    await expect(page).toHaveURL('/projetos')
    await expect(page.getByRole('heading', { name: /Projetos/i })).toBeVisible()
  })

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/')
    
    await page.getByRole('link', { name: /Entrar em Contato/i }).first().click()
    
    await expect(page).toHaveURL('/contato')
    await expect(page.getByRole('heading', { name: /Vamos Conversar/i })).toBeVisible()
  })

  test('should have working navbar navigation', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to Sobre
    await page.getByRole('link', { name: /Sobre/i }).first().click()
    await expect(page).toHaveURL('/sobre')
    
    // Navigate to Experiência
    await page.getByRole('link', { name: /Experiência/i }).first().click()
    await expect(page).toHaveURL('/experiencia')
    
    // Back to Home
    await page.getByRole('link', { name: /Pedro Canedo/i }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/')
    
    const html = page.locator('html')
    
    // Should start in light mode or system preference
    const initialTheme = await html.getAttribute('class')
    
    // Click theme toggle
    await page.getByRole('button', { name: /Alternar tema/i }).click()
    
    // Theme should change
    const newTheme = await html.getAttribute('class')
    expect(newTheme).not.toBe(initialTheme)
  })
})

