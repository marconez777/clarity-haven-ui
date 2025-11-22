from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_page(page: Page):
    # Navigate to the new page
    print("Navigating to page...")
    page.goto("http://127.0.0.1:8080/consulta-para-tdah-online", timeout=10000)

    # Wait for hydration/rendering
    # Check if the unique H1 we added is visible.
    # Use exact=True to match only the specific heading
    print("Waiting for H1...")
    expect(page.get_by_role("heading", name="Consulta para TDAH Online", exact=True)).to_be_visible(timeout=10000)

    # Check if the Hero H1 is visible
    expect(page.get_by_text("Dificuldade de Foco, Impulsividade ou Esquecimento Constante?")).to_be_visible()

    # Check if the "Seção de Texto Adicional" (Lorem Ipsum) is GONE
    expect(page.get_by_text("Lorem Ipsum Dolor Sit Amet")).not_to_be_visible()

    # NOW Check if the title is correct
    print("Checking title...")
    expect(page).to_have_title("Consulta para TDAH Online | DR Gabriel Lopes", timeout=5000)

    # Take a full page screenshot to verify layout
    print("Taking screenshot...")
    page.screenshot(path="/home/jules/verification/verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_page(page)
        finally:
            browser.close()
